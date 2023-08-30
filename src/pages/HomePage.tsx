import { useSearchParams } from "react-router-dom";
import { Page } from "../components/layout";
import { useHotels, HotelFilter } from "../hooks/useHotels";

const getFilterFromSearchParams = (
  searchParams: URLSearchParams,
): HotelFilter => {
  const filter: HotelFilter = {};

  const starRatingParam = searchParams.get("starRating");

  if (starRatingParam) {
    filter.starRating = Number(starRatingParam);
  }

  const minAdultsParam = searchParams.get("minAdults");

  if (minAdultsParam) {
    filter.minAdults = Number(minAdultsParam);
  }

  const minChildrenParam = searchParams.get("minChildren");

  if (minChildrenParam) {
    filter.minChildren = Number(minChildrenParam);
  }

  return filter;
};

export const HomePage = () => {
  const [searchParams] = useSearchParams();

  const { data, isLoading } = useHotels(
    getFilterFromSearchParams(searchParams),
  );

  console.log({ searchParams, isLoading, data });

  // TODO: filter and listing
  return (
    <Page title="Hotels">
      <p>List of hotels</p>
    </Page>
  );
};
