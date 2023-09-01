import { Skeleton } from "./Skeleton";

export const HotelListItemSkeleton = () => {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white">
      <Skeleton className="aspect-h-4 aspect-w-3 sm:aspect-none group-hover:opacity-75 sm:h-72" />
      <div className="flex flex-1 flex-col space-y-2 p-4">
        <Skeleton className="w-3/4 h-5" />
        <Skeleton className="w-1/4 h-4" />
        <Skeleton className="w-2/5 h-4 pt-1 " />
      </div>
    </div>
  );
};
