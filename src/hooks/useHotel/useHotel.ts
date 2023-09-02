import { QueryFunction, useQuery } from "@tanstack/react-query";
import { useHotels } from "../useHotels";
import { Hotel } from "../useHotels/types";

// As we have no endpoint to retrieve the full details of a hotel via its ID
// we must first retrieve all of the hotels and then filter these by the
// supplied ID.  By utilising the react-query cache we will only retrieve the
// hotels from the API if nothing already exists in the cache (i.e. navigating
// to a hotel page directly)
export const useHotel = (id?: string) => {
  const { data, isLoading } = useHotels();

  const queryFn: QueryFunction<Hotel> = () => {
    if (!id) {
      throw new Error("A hotel ID must be supplied");
    }

    const hotel = data?.find(({ id: hotelId }) => hotelId === id);

    if (!hotel) {
      throw new Error(`No hotel found with id: ${id}`);
    }

    return hotel;
  };

  return useQuery<Hotel>({
    queryKey: ["hotel", id],
    queryFn,
    // Only execute this query when `useHotels` is ready
    enabled: !isLoading,
  });
};
