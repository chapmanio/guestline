import { Link } from "react-router-dom";

const Nav = () => {
  // TODO: active link selection and theme colors?
  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8 lg:py-9">
        <div className="flex">
          <div className="flex flex-shrink-0 items-center">
            <img
              className="block h-10 w-auto lg:hidden"
              src="/img/guestline-icon.png"
              alt="Your Company"
            />
            <img
              className="hidden h-11 w-auto lg:block"
              src="/img/guestline-logo.png"
              alt="Guestline"
            />
          </div>
          <div className="hidden sm:-my-px sm:ml-9 sm:flex sm:space-x-8">
            <Link
              to="/"
              className="border-[#009fe3] text-[#009fe3] inline-flex items-center border-b-2 px-1 pt-1 text-sm font-light"
              aria-current="page"
            >
              Hotels
            </Link>
          </div>
        </div>
      </div>

      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 pb-3">
          <Link
            to="/"
            className="border-[#009fe3] text-[#009fe3] block border-l-2 py-2 pl-3 pr-4 text-base font-light"
            aria-current="page"
          >
            Hotels
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
