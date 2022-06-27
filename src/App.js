import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import BooksContextProvider from "./contexts/booksContext";
import Routing from "./Routing";
import "./App.css";
import AuthContextProvider from "./contexts/authContext";

const App = () => {
  return (
    <AuthContextProvider>
      <BooksContextProvider>
        <BrowserRouter>
          <Header />
          <Routing />
          <Footer />
        </BrowserRouter>
      </BooksContextProvider>
    </AuthContextProvider>
  );
};

export default App;
