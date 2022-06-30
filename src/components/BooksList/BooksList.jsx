import { Box, Button, Container, Pagination } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { booksContext } from "../../contexts/booksContext";
import BooksCard from "../BooksCard/BooksCard";
import SearchField from "../SearchField/SearchField";
import SideBar from "../SideBar/SideBar";

const BooksList = () => {
  const navigate = useNavigate();
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

  if (!books) return <h2>not found</h2>;

  return (
    <Box display={"flex"}>
      <SideBar setFilter={setSearch} />
      <Box>
        <Box marginTop={"10px"} display={"flex"} height={"30px"}>
          <SearchField search={search} setSearch={setSearch} />
          <Button
            style={{ marginTop: "20px", width: "20%", height: "40px" }}
            color="primary"
            variant="contained"
            onClick={() => navigate("/add-book")}
          >
            Добавить книгу
          </Button>
        </Box>

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
      </Box>
    </Box>
  );
};

export default BooksList;
