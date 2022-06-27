import { Box, Container, Pagination } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { booksContext } from "../../contexts/booksContext";
import BooksCard from "../BooksCard/BooksCard";
import SearchField from "../SearchField/SearchField";

const BooksList = () => {
  const { getBooks, books, pages } = useContext(booksContext);
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(
    searchParams.get("") ? searchParams.get("q") : ""
  );
  useEffect(() => {
    getBooks();
  }, []);
  useEffect(() => {
    setSearchParams({
      q: search,
      _page: page,
      _limit: 6,
    });
  }, [search, page]);

  useEffect(() => {
    getBooks();
  }, [searchParams]);

  return (
    <Container>
      <SearchField search={search} setSearch={setSearch} />

      <div style={{ display: "flex", margin: "40px", flexWrap: "wrap" }}>
        {books.map((item) => (
          <BooksCard key={item.id} item={item} />
        ))}
      </div>
      <Box display={"flex"} justifyContent={"center"}>
        <Pagination
          page={page}
          count={isNaN(pages) ? 0 : pages}
          variant="outlined"
          shape="rounded"
          onChange={(e, value) => setPage(value)}
        />
      </Box>
    </Container>
  );
};

export default BooksList;
