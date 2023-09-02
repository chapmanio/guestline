import { QueryFunction, useQuery } from "@tanstack/react-query";
import { getHotels } from "../../libs/api/getHotels";
import { getRoomsAndRates } from "../../libs/api/getRoomsAndRates";
import { Hotel, HotelFilter } from "./types";
import { ApiRoomRate } from "../../libs/api/types";

const hasCapacity = ({
  rooms,
  minAdults = 0,
  minChildren = 0,
}: {
  rooms: ApiRoomRate["rooms"];
  minAdults?: number;
  minChildren?: number;
}) => {
  // We only care if at least one of the rooms matches the filters
  return rooms.some((room) => {
    const {
      occupancy: { maxAdults, maxChildren },
    } = room;

    return minAdults <= maxAdults && minChildren <= maxChildren;
  });
};

// In order to apply the filters for the occupancy, we must retrieve all
// of the hotels and then the rooms and rates for each.  By utilising the
// react-query cache this can also be used as a "global" store for
// retrieving the details of a single store (see `useHotel`)
export const useHotels = (filter: HotelFilter = {}) => {
  const { minAdults, minChildren, starRating } = filter;

  const queryFn: QueryFunction<Hotel[]> = async () => {
    const hotels: Hotel[] = [];

    const apiHotels = await getHotels();

    // Filter the star rating before fetching rooms & rates to prevent
    // unnecessary additional fetches
    let filteredApiHotels = apiHotels;

    if (starRating) {
      filteredApiHotels = apiHotels.filter(
        ({ starRating: hotelStarRating }) =>
          Number(hotelStarRating) >= starRating,
      );
    }

    for (const filteredApiHotel of filteredApiHotels) {
      const roomsAndRates = await getRoomsAndRates(filteredApiHotel.id);

      let includeHotel = true;

      if (minAdults || minChildren) {
        includeHotel = hasCapacity({
          rooms: roomsAndRates.rooms,
          minAdults,
          minChildren,
        });
      }

      if (includeHotel) {
        // Merge the hotel details with the rooms and rates details
        hotels.push({
          ...filteredApiHotel,
          ...roomsAndRates,
        });
      }
    }

    return hotels;
  };

  return useQuery<Hotel[]>({
    queryKey: ["hotels", filter],
    queryFn,
  });
};
