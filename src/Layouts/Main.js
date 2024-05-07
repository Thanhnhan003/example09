import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import ProductDetail from "../Pages/Detail/ProductDetail";
const Main = () => (
    <main>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<ProductDetail />} />
        </Routes>
    </main>
);
export default Main;