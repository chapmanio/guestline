import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout";
import { HomePage, HotelPage, ErrorPage } from "./pages";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/hotel/:id" element={<HotelPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};
