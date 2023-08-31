export const HotelListItemSkeleton = () => {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white">
      <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-72 animate-pulse" />
      <div className="flex flex-1 flex-col space-y-2 p-4">
        <div className="w-3/4 h-5 animate-pulse bg-gray-200 rounded" />
        <div className="w-1/4 h-4 animate-pulse bg-gray-200 rounded" />
        <div className="w-2/5 h-4 pt-1 animate-pulse bg-gray-200 rounded" />
      </div>
    </div>
  );
};
