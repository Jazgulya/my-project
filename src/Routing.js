import React from "react";
import { Routes, Route } from "react-router-dom";
import AddBook from "./components/AddBook/AddBook";

const Routing = () => {
  return (
    <Routes>
      <Route path="/add-book" element={<AddBook />} />
    </Routes>
  );
};

export default Routing;
