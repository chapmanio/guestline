import { ApiRoomRate } from "./types";

export const getRoomsAndRates = async (id: string): Promise<ApiRoomRate> => {
  try {
    const response = await fetch(
      `https://obmng.dbm.guestline.net/api/roomRates/OBMNG/${id}`,
    );
    const roomsAndRates: ApiRoomRate = await response.json();

    return roomsAndRates;
  } catch (error) {
    console.error(error);

    throw new Error(`Unable to fetch rooms and rates for id: ${id}`);
  }
};
