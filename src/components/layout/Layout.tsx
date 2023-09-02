import { Outlet } from "react-router-dom";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

export const Layout = () => {
  return (
    <div className="min-h-full">
      <Nav />
      <div className="py-10">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};
