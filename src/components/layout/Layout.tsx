import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Nav from "./Nav";

const Layout = () => {
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

export default Layout;
