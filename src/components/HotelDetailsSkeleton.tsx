import { Skeleton } from "./Skeleton";
import { AddressIcon, EmailIcon, TelephoneIcon } from "./icons";

export const HotelDetailsSkeleton = () => {
  return (
    <>
      <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
        <div className="flex flex-col-reverse">
          <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
            <div className="grid grid-cols-4 gap-6">
              {[...Array(4)].map((_, index) => (
                <Skeleton key={index} className="h-24" />
              ))}
            </div>
          </div>

          <div className="aspect-h-1 aspect-w-1 w-full">
            <Skeleton className="h-full w-full sm:rounded-lg" />
          </div>
        </div>

        <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
          <Skeleton className="w-2/5 h-9" />
          <Skeleton className="w-1/4 h-9 mt-3" />
          <Skeleton className="w-1/5 h-5 mt-3" />

          <div className="mt-6">
            <div className="space-y-6 text-base text-gray-700">
              <Skeleton className="h-36" />

              <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <AddressIcon />
                  </dt>
                  <dd className="w-full">
                    <Skeleton className="h-7 w-1/2" />
                    <Skeleton className="h-7 w-2/5 mt-1" />
                    <Skeleton className="h-7 w-1/4 mt-1" />
                    <Skeleton className="h-7 w-2/5 mt-1" />
                    <Skeleton className="h-7 w-1/5 mt-1" />
                  </dd>
                </div>

                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <TelephoneIcon />
                  </dt>
                  <dd className="w-full">
                    <Skeleton className="h-7 w-2/5" />
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <EmailIcon />
                  </dt>
                  <dd className="w-full">
                    <Skeleton className="h-7 w-1/2" />
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
          {[...Array(4)].map((_, index) => (
            <li key={index} className="py-6">
              <Skeleton className="w-1/5 h-5" />
              <Skeleton className="h-20 mt-1" />

              <div className="pt-4 flex space-x-6">
                <Skeleton className="h-5 w-1/6" />
                <Skeleton className="h-5 w-1/6" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
