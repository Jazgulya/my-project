import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import BooksContextProvider from "./contexts/booksContext";
import Routing from "./Routing";
import "./App.css";
import AuthContextProvider from "./contexts/authContext";
import { CartProvider } from "react-use-cart";
import CommentsContextProvider from "./contexts/commentsContext";

const App = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <BooksContextProvider>
          <CommentsContextProvider>
            <CartProvider>
              <Header />
              <Routing />
              <Footer />
            </CartProvider>
          </CommentsContextProvider>
        </BooksContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
};

export default App;
