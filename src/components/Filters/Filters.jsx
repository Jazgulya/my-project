import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { booksContext } from "../../contexts/booksContext";

const Filters = () => {
  const { filterByTag, books, getBooks } = useContext(booksContext);
  useEffect(() => { getBooks() }, [])


  return (
    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "inline" } }}>
      <Typography variant="h6" style={{ margin: "10px" }}>
        {" "}
        По категории
      </Typography>

      <ButtonGroup
        style={{ display: "flex", flexDirection: "column" }}
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button onClick={() => filterByTag("chapter", "all")}>Все</Button>
        {/* <Button onClick={() => filterByTag("chapter", "Популярная психология")}>
          Популярная психология
        </Button>
        <Button onClick={() => filterByTag("chapter", "Детективы")}>
          Детективы
        </Button>
        <Button onClick={() => filterByTag("chapter", "Автобиографии")}>
          Автобиографии
        </Button>
        <Button
          onClick={() => filterByTag("chapter", "Современная зарубежная проза")}
        >
          Современная зарубежная проза
        </Button>
        <Button
          onClick={() =>
            filterByTag("chapter", "Романы")
          }
        >
          Романы
        </Button> */}
        {books?.map((item) =>
          <Button key={item.id} onClick={() => filterByTag("chapter", `${item?.chapter}`)}>{item?.chapter}</Button>)}
      </ButtonGroup>
    </Box>
  );
};

export default Filters;
