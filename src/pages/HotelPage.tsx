import { useParams } from "react-router";
import { Page } from "../components/layout";
import { useHotel } from "../hooks/useHotel";
import { HotelDetails, HotelDetailsSkeleton } from "../components";
import { ErrorPage } from ".";

export const HotelPage = () => {
  const { id } = useParams<"id">();

  const { data, isLoading, error } = useHotel(id);

  return !error ? (
    <Page>
      {isLoading && <HotelDetailsSkeleton />}
      {data && <HotelDetails hotel={data} />}
    </Page>
  ) : (
    <ErrorPage />
  );
};
