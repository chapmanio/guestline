import { describe, it, expect } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import { rest } from "msw";
import {
  mockedHotels,
  mockedRoomsAndRates,
  wrapper,
  server,
  createFakeHotel,
  createFakeRoom,
} from "../../tests";
import { Hotel, useHotels } from ".";
import { ApiHotel, ApiRoomRate } from "../../libs/api/types";

describe("useHotels", () => {
  it("retrieves and merges data with no filters", async () => {
    const { result } = renderHook(useHotels, { wrapper });

    await waitFor(() => expect(result.current.isLoading).toBe(false));

    // The default handlers respond with the same rooms and rates for every call,
    // so we merge that default data with each hotel to create the expected result
    const mergedHotels = [
      {
        ...mockedHotels[0],
        ...mockedRoomsAndRates,
      },
      {
        ...mockedHotels[1],
        ...mockedRoomsAndRates,
      },
    ];

    expect(result.current.data).toEqual(mergedHotels);
  });

  it("filters based on star rating", async () => {
    const fakeFourStarHotel: ApiHotel = createFakeHotel({
      id: "fake-hotel-3",
      starRating: "4",
    });

    server.use(
      rest.get("https://obmng.dbm.guestline.net/api/hotels", (_req, res, ctx) =>
        res(ctx.json<ApiHotel[]>([...mockedHotels, fakeFourStarHotel])),
      ),
    );

    const { result } = renderHook(() => useHotels({ starRating: 4 }), {
      wrapper,
    });

    await waitFor(() => expect(result.current.isLoading).toBe(false));

    // Only the fake hotel above should be returned
    expect(result.current.data).toEqual([
      {
        ...fakeFourStarHotel,
        ...mockedRoomsAndRates,
      },
    ]);
  });

  it("filters based on occupancy", async () => {
    const fakeRoomRateWithChildren: ApiRoomRate = {
      ...mockedRoomsAndRates,
      rooms: [
        createFakeRoom({
          id: "fake-room-1",
          occupancy: {
            maxAdults: 3,
            maxChildren: 3,
          },
        }),
      ],
    };

    server.use(
      rest.get(
        "https://obmng.dbm.guestline.net/api/roomRates/OBMNG/:id",
        (req, res, ctx) => {
          const { id } = req.params;

          switch (id) {
            case "fake-hotel-1":
              return res(
                ctx.json<ApiRoomRate>({
                  ...mockedRoomsAndRates,
                  rooms: [
                    createFakeRoom({
                      id: "fake-room-1",
                      occupancy: {
                        maxAdults: 5,
                        maxChildren: 0,
                      },
                    }),
                  ],
                }),
              );
            case "fake-hotel-2":
              return res(ctx.json<ApiRoomRate>(fakeRoomRateWithChildren));
            default:
              return res(ctx.json(mockedRoomsAndRates));
          }
        },
      ),
    );

    const { result } = renderHook(() => useHotels({ minChildren: 1 }), {
      wrapper,
    });

    await waitFor(() => expect(result.current.isLoading).toBe(false));

    // Only the second hotel ID above should match the filters
    const mergedHotels = [
      {
        ...mockedHotels.find(({ id }) => id === "fake-hotel-2"),
        ...fakeRoomRateWithChildren,
      },
    ] as Hotel[];

    expect(result.current.data).toEqual(mergedHotels);
  });
});
