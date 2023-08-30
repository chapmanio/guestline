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
                className="border-indigo-500 text-gray-900 inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium"
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
              className="border-indigo-500 bg-indigo-50 text-indigo-700 block border-l-4 py-2 pl-3 pr-4 text-base font-medium"
              aria-current="page"
            >
              Hotels
            </a>
          </div>
        </div>
      </nav>

      <div className="py-10">
        <header>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
              Hotels
            </h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8"></div>
        </main>
      </div>
    </div>
  );
}

export default App;
