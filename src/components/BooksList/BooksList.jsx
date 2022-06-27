import React, { useContext, useEffect } from "react";
import { booksContext } from "../../contexts/booksContext";
import BooksCard from "../BooksCard/BooksCard";

const BooksList = () => {
  const { getBooks, books } = useContext(booksContext);
  useEffect(() => {
    getBooks();
  }, []);
  return (
    <div style={{ display: "flex", margin: "40px", flexWrap: "wrap" }}>
      {books.map((item) => (
        <BooksCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default BooksList;
