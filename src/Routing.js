import React from "react";
import { Routes, Route } from "react-router-dom";
import AddBook from "./components/AddBook/AddBook";
import BooksList from "./components/BooksList/BooksList";
import Cart from "./components/Cart/Cart";
import Comments from "./components/Comments/Comments";
import Details from "./components/Details/Details";
import EditBook from "./components/EditBook/EditBook";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import RegisterSuccess from "./components/RegisterSuccess/RegisterSuccess";

const Routing = () => {
  return (
    <Routes>
      <Route path="/add-book" element={<AddBook />} />
      <Route path="/books" element={<BooksList />} />
      <Route path="/register" element={<Register />} />
      <Route path="/register-success" element={<RegisterSuccess />} />
      <Route path="/login" element={<Login />} />
      <Route path="/books/:id" element={<Details />} />
      <Route path="/edit/:id" element={<EditBook />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default Routing;
