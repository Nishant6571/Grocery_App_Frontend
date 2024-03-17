import React from "react";
import { Routes, Route } from "react-router-dom";
import Grocery from "../pages/Grocery";
import Grocerylist from "../pages/Grocerylist";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Grocery />} />
      <Route path="/grocerylist" element={<Grocerylist />} />{" "}
    </Routes>
  );
};

export default AllRoutes;
