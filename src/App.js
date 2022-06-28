import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import BooksContextProvider from "./contexts/booksContext";
import Routing from "./Routing";
import "./App.css";
import AuthContextProvider from "./contexts/authContext";
import { CartProvider } from "react-use-cart";

const App = () => {
  return (
    <AuthContextProvider>
      <CartProvider>
        <BooksContextProvider>
          <BrowserRouter>
            <Header />
            <Routing />
            <Footer />
          </BrowserRouter>
        </BooksContextProvider>
      </CartProvider>
    </AuthContextProvider>
  );
};

export default App;
