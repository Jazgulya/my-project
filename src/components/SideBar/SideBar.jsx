
import { Box, Slider, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { booksContext } from "../../contexts/booksContext";
import Filters from "../Filters/Filters";
import SearchField from "../SearchField/SearchField";

const SideBar = ({ price, setPrice }) => {
  const { getBooks } = useContext(booksContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(
    searchParams.get("") ? searchParams.get("q") : ""
  );

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);
  useEffect(() => {
    getBooks();
  }, []);

  useEffect(() => {
    getBooks();
  }, [searchParams]);
  return (
    <div style={{ width: "20vw" }} id="sidebar">
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "inline" } }}>
        <SearchField search={search} setSearch={setSearch} />
        <Typography variant="h6">По цене</Typography>
        <Slider
          style={{ width: "100%" }}
          getAriaLabel={() => "Temperature range"}
          value={price}
          onChange={(e, value) => setPrice(value)}
          valueLabelDisplay="auto"
          min={200}
          max={5000}
          step={50}
        />
      </Box>
      <Filters />
    </div>
  );
};

export default SideBar;
