import { useSearchParams } from "react-router-dom";
import { Page } from "../components/layout";
import { useHotels, HotelFilter } from "../hooks/useHotels";
import {
  NumberRange,
  RadioButton,
  StarFilterLabel,
} from "../components/filter";
import { HotelListItem, HotelListItemSkeleton } from "../components";
import { useState } from "react";

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
  const [searchParams, setSearchParams] = useSearchParams();
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  const { data, isLoading } = useHotels(
    getFilterFromSearchParams(searchParams),
  );

  const onChangeStarRating = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams((params) => {
      params.set("starRating", event.target.value);

      return params;
    });
  };

  const onChangeMinAdults = (value: number) => {
    setSearchParams((params) => {
      params.set("minAdults", value.toString());

      return params;
    });
  };

  const onChangeMinChildren = (value: number) => {
    setSearchParams((params) => {
      params.set("minChildren", value.toString());

      return params;
    });
  };

  // TODO: filter
  return (
    <Page>
      <div>
        <div
          className={
            `relative z-40 lg:hidden ` +
            (showMobileFilter ? `pointer-events-auto` : `pointer-events-none`)
          }
          role="dialog"
          aria-modal="true"
        >
          <div
            className={
              `fixed inset-0 bg-black bg-opacity-25 transition-opacity ease-linear duration-300 ` +
              (showMobileFilter ? `opacity-100` : `opacity-0`)
            }
          />

          <div className="fixed inset-0 z-40 flex">
            <div
              className={
                `relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition ease-in-out duration-300 transform ` +
                (showMobileFilter ? `translate-x-0"` : `translate-x-full`)
              }
            >
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                <button
                  type="button"
                  className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                  onClick={() => setShowMobileFilter(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <form className="mt-4 border-t border-gray-200">
                <div className="px-4 py-6">
                  <h3 className="font-medium text-gray-900">Star rating</h3>
                  <div className="pt-6">
                    <div className="space-y-4">
                      {[...Array(5)].map((_, index) => {
                        const count = index + 1;

                        return (
                          <RadioButton
                            key={index}
                            id={`starRating${count}`}
                            isChecked={
                              searchParams.get("starRating") ===
                              count.toString()
                            }
                            onChange={onChangeStarRating}
                            value={count.toString()}
                          >
                            <StarFilterLabel count={count} />
                          </RadioButton>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6">
                  <h3 className="font-medium text-gray-900">Room capacity</h3>

                  <div className="pt-6">
                    <div className="space-y-4">
                      <NumberRange
                        id="minAdults"
                        label="Adults"
                        onChange={onChangeMinAdults}
                        value={Number(searchParams.get("minAdults") || 1)}
                        min={1}
                      />
                      <NumberRange
                        id="minChildren"
                        label="Children"
                        onChange={onChangeMinChildren}
                        value={Number(searchParams.get("minChildren"))}
                        min={0}
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6">
            <h1 className="text-3xl font-medium text-gray-900">Hotels</h1>

            <div className="flex items-center">
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => {
                  setShowMobileFilter(true);
                }}
              >
                <span className="sr-only">Filters</span>
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>

          <section aria-labelledby="hotels-heading" className="pb-24 pt-6">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              <form className="hidden lg:block">
                <div className="border-b border-gray-200 py-6">
                  <h3 className="text-sm font-medium text-gray-900">
                    Star rating
                  </h3>
                  <div className="pt-6">
                    <div className="space-y-4">
                      {[...Array(5)].map((_, index) => {
                        const count = index + 1;

                        return (
                          <RadioButton
                            key={index}
                            id={`starRating${count}`}
                            isChecked={
                              searchParams.get("starRating") ===
                              count.toString()
                            }
                            onChange={onChangeStarRating}
                            value={count.toString()}
                          >
                            <StarFilterLabel count={count} />
                          </RadioButton>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="border-b border-gray-200 py-6">
                  <h3 className="text-sm font-medium text-gray-900">
                    Room capacity
                  </h3>

                  <div className="pt-6">
                    <div className="space-y-4">
                      <NumberRange
                        id="minAdults"
                        label="Adults"
                        onChange={onChangeMinAdults}
                        value={Number(searchParams.get("minAdults") || 1)}
                        min={1}
                      />
                      <NumberRange
                        id="minChildren"
                        label="Children"
                        onChange={onChangeMinChildren}
                        value={Number(searchParams.get("minChildren"))}
                        min={0}
                      />
                    </div>
                  </div>
                </div>
              </form>

              <div className="lg:col-span-3">
                <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
                  {isLoading ? (
                    <>
                      {[...Array(Number(6))].map((_, index) => (
                        <HotelListItemSkeleton key={index} />
                      ))}
                    </>
                  ) : (
                    <>
                      {data?.map((hotel) => (
                        <HotelListItem key={hotel.id} hotel={hotel} />
                      ))}
                    </>
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Page>
  );
};
