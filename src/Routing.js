import React from "react";
import { Routes, Route } from "react-router-dom";
import AddBook from "./components/AddBook/AddBook";
import BooksList from "./components/BooksList/BooksList";
import Comments from "./components/Comments/Comments";
import Details from "./components/Details/Details";
import EditBook from "./components/EditBook/EditBook";
import Register from "./components/Register/Register";
import RegisterSuccess from "./components/RegisterSuccess/RegisterSuccess";

const Routing = () => {
  return (
    <Routes>
      <Route path="/add-book" element={<AddBook />} />
      <Route path="/books" element={<BooksList />} />
      <Route path="/register" element={<Register />} />
      <Route path="/register-success" element={<RegisterSuccess />} />
      <Route path="/books/:id" element={<Details />} />
      <Route path="/edit/:id" element={<EditBook />} />
    </Routes>
  );
};

export default Routing;
