function App() {
  return (
    <div className="min-h-full">
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
              <a
                href="/"
                className="border-[#009fe3] text-[#009fe3] inline-flex items-center border-b-2 px-1 pt-1 text-sm font-light"
                aria-current="page"
              >
                Hotels
              </a>
            </div>
          </div>
        </div>

        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 pb-3">
            <a
              href="/"
              className="border-[#009fe3] text-[#009fe3] block border-l-2 py-2 pl-3 pr-4 text-base font-light"
              aria-current="page"
            >
              Hotels
            </a>
          </div>
        </div>
      </nav>

      <div className="py-10">
        <header>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-6">
            <h1 className="text-3xl font-medium text-gray-900">Hotels</h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 pb-10">
            Hello world
          </div>
        </main>
        <footer className="bg-white border-t border-gray-200">
          <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
            <div className="mt-8 md:order-1 md:mt-0">
              <p className="text-center text-sm leading-5 text-[#403f3f]">
                Company No. 2661520 © Guestline 2023. All Rights Reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
