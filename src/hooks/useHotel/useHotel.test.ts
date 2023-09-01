import { describe, it, expect } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import { mockedHotels, mockedRoomsAndRates, wrapper } from "../../tests";
import { useHotel } from ".";

describe("useHotel", () => {
  it("retrieves a hotel based on supplied id", async () => {
    const hotelId = "fake-hotel-1";

    const { result } = renderHook(() => useHotel(hotelId), { wrapper });

    await waitFor(() => expect(result.current.isLoading).toBe(false));

    expect(result.current.data).toEqual({
      ...mockedHotels[0],
      ...mockedRoomsAndRates,
    });
  });

  it("errors with no supplied id", async () => {
    const { result } = renderHook(useHotel, { wrapper });

    await waitFor(() =>
      expect(result.current.failureReason).toEqual(
        Error("A hotel ID must be supplied"),
      ),
    );
  });

  it("errors with an unmatched id", async () => {
    const { result } = renderHook(() => useHotel("unknown"), { wrapper });

    await waitFor(() =>
      expect(result.current.failureReason).toEqual(
        Error("No hotel found with id: unknown"),
      ),
    );
  });
});
