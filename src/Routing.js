import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AddBook from "./components/AddBook/AddBook";
import AdminPanel from "./components/AdminPanel/AdminPanel";
import BooksList from "./components/BooksList/BooksList";
import Cart from "./components/Cart/Cart";
import Chat from "./components/Chat/Chat";
import Details from "./components/Details/Details";
import EditBook from "./components/EditBook/EditBook";
import Favourites from "./components/Favourites/Favourites";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import HomePage from "./components/HomePage/HomePage";
import Invoice from "./components/Invoice/Invoice";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import PaymentCard from "./components/Payment/PaymentCard";
import PaymentForm from "./components/Payment/PaymentForm";
import Register from "./components/Register/Register";
import { authContext } from "./contexts/authContext";

const Routing = () => {
  const { isAdmin, currentUser } = useContext(authContext);
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/books" element={<BooksList />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/books/:bookId" element={<Details />} />
      {isAdmin ? <><Route
        path="/admin"
        element={<AdminPanel />}
      />
        <Route
          path="/edit/:bookId"
          element={<EditBook />}
        />

        <Route
          path="/add-book"
          element={<AddBook />}
        /></> : null}

      <Route
        path="/chat"
        element={<Chat />}
      />
      {currentUser ? <>
        <Route
          path="/cart"
          element={<Cart />} />

        <Route
          path="/favourites"
          element={<Favourites />}
        /></> : null}

      <Route path="/payment" element={<PaymentForm />} />
      <Route path="/paymentcard" element={<PaymentCard />} />
      <Route path="/invoice" element={<Invoice />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="*" element={<NotFound />} />

    </Routes>
  );
};

export default Routing;
