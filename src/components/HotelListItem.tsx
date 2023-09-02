import { Link } from "react-router-dom";
import { Hotel } from "../hooks/useHotels";
import { StarIcon } from "./icons";

type HotelListItemProps = {
  hotel: Hotel;
};

export const HotelListItem = ({
  hotel: { id, images, name, rooms, starRating },
}: HotelListItemProps) => {
  const firstImage = images[0].url;

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white">
      <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-72">
        <img
          src={firstImage}
          alt={name}
          className="h-full w-full object-cover object-center sm:h-full sm:w-full"
        />
      </div>
      <div className="flex flex-1 flex-col space-y-2 p-4">
        <h3 className="text-sm font-medium text-gray-900">
          <Link to={`/hotel/${id}`}>
            <span aria-hidden="true" className="absolute inset-0"></span>
            {name}
          </Link>
        </h3>

        <div className="flex flex-1 flex-col justify-end">
          <p className="text-sm italic text-gray-500">
            {rooms.length} room options
          </p>
          <div className="flex pt-1 text-[#009fe3]">
            {[...Array(Number(starRating))].map((_, index) => (
              <StarIcon key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
