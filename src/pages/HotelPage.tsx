import { useParams } from "react-router";
import { Page } from "../components/layout";
import { useHotel } from "../hooks/useHotel";

export const HotelPage = () => {
  const { id } = useParams<"id">();

  const { data, isLoading } = useHotel(id);

  console.log({ data, isLoading });

  // TODO: layout
  return (
    <Page title="Hotel name">
      <p>Hotel details</p>
    </Page>
  );
};
