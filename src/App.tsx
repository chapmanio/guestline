import { Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import HotelPage from "./pages/HotelPage";

const App = () => {
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

export default App;
