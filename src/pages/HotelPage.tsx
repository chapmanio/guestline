import { useParams } from "react-router";
import { Page } from "../components/layout";
import { useHotel } from "../hooks/useHotel";
import { HotelDetails, HotelDetailsSkeleton } from "../components";

export const HotelPage = () => {
  const { id } = useParams<"id">();

  const { data, isLoading } = useHotel(id);

  return (
    <Page>
      {isLoading ? (
        <HotelDetailsSkeleton />
      ) : data ? (
        <HotelDetails hotel={data} />
      ) : (
        "Something went wrong"
      )}
    </Page>
  );
};
