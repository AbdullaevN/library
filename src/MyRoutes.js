import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNavbar from "./components/MyNavbar";
import AddBookPage from "./pages/AddBookPage";
import MainPage from "./pages/MainPage";
import Wishlist from "./pages/Wishlist";

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/add" element={<AddBookPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
