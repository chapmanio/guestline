import { Link, useSearchParams } from "react-router-dom";
import { Page } from "../components/layout";
import { useHotels, HotelFilter } from "../hooks/useHotels";
import { StarIcon } from "../components/icons";

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

  console.log({ isLoading, data });

  // TODO: filter
  return (
    <Page title="Hotels">
      <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
        {data?.map((hotel) => (
          <div
            key={hotel.id}
            className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
          >
            <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96">
              <img
                src={hotel.images[0].url}
                alt={hotel.name}
                className="h-full w-full object-cover object-center sm:h-full sm:w-full"
              />
            </div>
            <div className="flex flex-1 flex-col space-y-2 p-4">
              <h3 className="text-sm font-medium text-gray-900">
                <Link to={`/hotel/${hotel.id}`}>
                  <span aria-hidden="true" className="absolute inset-0"></span>
                  {hotel.name}
                </Link>
              </h3>

              <div className="flex flex-1 flex-col justify-end">
                <p className="text-sm italic text-gray-500">
                  {hotel.rooms.length} room options
                </p>
                <div className="flex pt-1 text-[#009fe3]">
                  {[...Array(Number(hotel.starRating))].map((_, index) => (
                    <StarIcon key={index} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Page>
  );
};
