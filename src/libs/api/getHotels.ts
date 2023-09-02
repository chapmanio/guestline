import { ApiHotel } from "./types";

export const getHotels = async (): Promise<ApiHotel[]> => {
  try {
    const response = await fetch(
      "https://obmng.dbm.guestline.net/api/hotels?collection-id=OBMNG",
    );
    const hotels: ApiHotel[] = await response.json();

    return hotels;
  } catch (error) {
    console.error(error);

    throw new Error(`Unable to fetch hotels`);
  }
};
