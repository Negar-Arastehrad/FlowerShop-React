import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import CategoriesPage from "./Pages/CategoriesPage/CategoriesPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./Pages/Details/Details";
import Flowers from "./Pages/Flowers/Flowers";
import Cart from "./Pages/Cart/Cart";
import MainContextProvider from "./Context/MainContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MainContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:category_name" element={<CategoriesPage />} />
        <Route path="/flowers" element={<Flowers />} />
        <Route path="/flowers/:name" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  </MainContextProvider>
);
