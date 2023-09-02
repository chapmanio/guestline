import { rest } from "msw";
import { ApiHotel, ApiRoomRate, RatePlan, Room } from "../libs/api/types";
import { setupServer } from "msw/node";

export const createFakeHotel = (overrides: Partial<ApiHotel> = {}) => {
  return {
    id: "fake-hotel",
    name: "Fake Hotel",
    description: "Fake hotel descriptipon",
    address1: "Address 1",
    address2: "Address 2",
    postcode: "Post Code",
    town: "Town",
    countryCode: "GB",
    country: "United Kingdom",
    facilities: [],
    telephone: "12345666",
    email: "fake@email.com",
    images: [{ url: "https://image-1.png" }, { url: "https://image-2.png" }],
    starRating: "3",
    ...overrides,
  } as ApiHotel;
};

export const createFakeRoom = (overrides: Partial<Room> = {}) => {
  return {
    id: "fake-room-id",
    name: "Fake room name",
    longDescription: "Fake room long description",
    occupancy: { maxAdults: 2, maxChildren: 2, maxOverall: 4 },
    ...overrides,
  } as Room;
};

export const createFakeRatePlan = (overrides: Partial<RatePlan> = {}) => {
  return {
    id: "fake-rate-id",
    ...overrides,
  } as RatePlan;
};

export const mockedHotels: ApiHotel[] = [
  createFakeHotel({
    id: "fake-hotel-1",
    name: "Fake Hotel 1",
  }),
  createFakeHotel({
    id: "fake-hotel-2",
    name: "Fake Hotel 2",
    starRating: "4",
  }),
];

export const mockedRoomsAndRates: ApiRoomRate = {
  rooms: [
    createFakeRoom({ id: "fake-room-1", name: "Fake Room 1" }),
    createFakeRoom({ id: "fake-room-2", name: "Fake Room 2" }),
  ],
  ratePlans: [
    createFakeRatePlan({ id: "fake-rate-1" }),
    createFakeRatePlan({ id: "fake-rate-2" }),
  ],
};

// Default handlers
const handlers = [
  rest.get("https://obmng.dbm.guestline.net/api/hotels", (_req, res, ctx) => {
    return res(ctx.json(mockedHotels));
  }),
  rest.get(
    "https://obmng.dbm.guestline.net/api/roomRates/OBMNG/:id",
    (_req, res, ctx) => {
      return res(ctx.json(mockedRoomsAndRates));
    },
  ),
];

export const server = setupServer(...handlers);
