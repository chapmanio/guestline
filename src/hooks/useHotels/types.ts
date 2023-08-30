import { ApiHotel, ApiRoomRate } from "../../libs/api/types";

export type HotelFilter = {
  starRating?: number;
  minAdults?: number;
  minChildren?: number;
};

export type Hotel = ApiHotel & ApiRoomRate;
