import { Link } from "react-router-dom";

type PageProps = {
  title: string;
  children: React.ReactNode;
};

const Page = ({ title, children }: PageProps) => {
  return (
    <>
      <header>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-6">
          <h1 className="text-3xl font-medium text-gray-900">{title}</h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 pb-10">
          {children}
        </div>
      </main>
    </>
  );
};

export default Page;
