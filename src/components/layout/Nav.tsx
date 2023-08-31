import { Link, NavLink } from "react-router-dom";

export const Nav = () => {
  // TODO: active link selection and theme colors?
  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8 lg:py-9">
        <div className="flex">
          <div className="flex flex-shrink-0 items-center">
            <img
              className="block h-10 w-auto sm:hidden"
              src="/img/guestline-icon.png"
              alt="Your Company"
            />
            <img
              className="hidden h-11 w-auto sm:block"
              src="/img/guestline-logo.png"
              alt="Guestline"
            />
          </div>
          <div className="hidden sm:-my-px sm:ml-9 sm:flex sm:space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) => {
                return (
                  "inline-flex items-center border-b-2 px-1 pt-1 text-sm font-light " +
                  (isActive
                    ? "border-[#009fe3] text-[#009fe3]"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700")
                );
              }}
            >
              Hotels
            </NavLink>
          </div>
        </div>
      </div>

      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 pb-3">
          <NavLink
            to="/"
            className={({ isActive }) => {
              return (
                "block border-l-2 py-2 pl-3 pr-4 text-base font-light " +
                (isActive
                  ? "border-[#009fe3] text-[#009fe3]"
                  : "border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800")
              );
            }}
          >
            Hotels
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
