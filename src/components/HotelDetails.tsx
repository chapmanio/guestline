import { useState } from "react";
import { Hotel } from "../hooks/useHotels";
import { AddressIcon, EmailIcon, StarIcon, TelephoneIcon } from "./icons";
import { Capacity } from "./rooms";

type HotelDetailsProps = {
  hotel: Hotel;
};

export const HotelDetails = ({
  hotel: {
    address1,
    address2,
    country,
    description,
    email,
    images,
    name,
    postcode,
    rooms,
    starRating,
    telephone,
    town,
  },
}: HotelDetailsProps) => {
  const hasImages = images.length > 0;

  const [selectedImage, setSelectedImage] = useState(
    hasImages ? images[0].url : undefined,
  );

  return (
    <>
      <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
        <div className="flex flex-col-reverse">
          <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
            <div
              className="grid grid-cols-4 gap-6"
              aria-orientation="horizontal"
              role="tablist"
            >
              {images.map((image, index) => (
                <button
                  key={index}
                  id="tabs-1-tab-1"
                  className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                  aria-controls="tabs-1-panel-1"
                  role="tab"
                  type="button"
                  onClick={() => setSelectedImage(image.url)}
                >
                  <span className="absolute inset-0 overflow-hidden rounded-md">
                    <img
                      src={image.url}
                      alt=""
                      className="h-full w-full object-cover object-center"
                    />
                  </span>
                  <span
                    className={
                      ` pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2 ` +
                      (selectedImage === image.url
                        ? `ring-indigo-500`
                        : `ring-transparent`)
                    }
                    aria-hidden="true"
                  ></span>
                </button>
              ))}
            </div>
          </div>

          <div className="aspect-h-1 aspect-w-1 w-full">
            <div
              id="tabs-1-panel-1"
              aria-labelledby="tabs-1-tab-1"
              role="tabpanel"
              tabIndex={0}
            >
              {selectedImage ? (
                <img
                  src={selectedImage}
                  className="h-full w-full object-cover object-center sm:rounded-lg"
                />
              ) : (
                <div className="h-full w-full bg-gray-200 sm:rounded-lg" />
              )}
            </div>
          </div>
        </div>

        <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
          <h1 className="text-3xl font-bold text-gray-900">{name}</h1>

          <div className="mt-3">
            <h2 className="sr-only">Town</h2>
            <p className="text-3xl text-gray-900">{town}</p>
          </div>

          <div className="mt-3">
            <h3 className="sr-only">Star rating</h3>
            <div className="flex items-center">
              <div className="flex items-center text-indigo-500">
                {[...Array(Number(starRating) || 0)].map((_, index) => (
                  <StarIcon key={index} size={5} />
                ))}
              </div>
              <p className="sr-only">{starRating} stars</p>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="sr-only">Description</h3>
            <div className="space-y-6 text-base text-gray-700">
              <p>{description}</p>

              <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Address</span>
                    <AddressIcon />
                  </dt>
                  <dd>
                    <p>{address1}</p>
                    {address2 && <p>{address2}</p>}
                    <p>{town}</p>
                    <p>{country}</p>
                    <p>
                      <a
                        className="hover:text-gray-900"
                        href={`https://www.google.co.uk/maps?q=${postcode}`}
                      >
                        {postcode}
                      </a>
                    </p>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Telephone</span>
                    <TelephoneIcon />
                  </dt>
                  <dd>
                    <a
                      className="hover:text-gray-900"
                      href={`tel:${telephone}`}
                    >
                      {telephone}
                    </a>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <EmailIcon />
                  </dt>
                  <dd>
                    <a className="hover:text-gray-900" href={`mailto:${email}`}>
                      {email}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200">
        <h2 className="text-3xl text-gray-900">Rooms</h2>

        <ul role="list" className="divide-y divide-gray-100">
          {rooms.map((room) => (
            <li key={room.id} className="py-6">
              <p className="font-semibold text-gray-900">{room.name}</p>
              <p className="mt-1 text-sm text-gray-500">
                {room.longDescription}
              </p>

              <div className="pt-4 flex space-x-6">
                <Capacity label="Adults" max={room.occupancy.maxAdults} />

                {room.occupancy.maxChildren > 0 && (
                  <Capacity label="Children" max={room.occupancy.maxChildren} />
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
