import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { booksContext } from "../../contexts/booksContext";

const Filters = () => {
  const { filterByTag } = useContext(booksContext);

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
        <Button onClick={() => filterByTag("chapter", "Популярная психология")}>
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
            filterByTag("chapter", "Романы", "Современная зарубежная проза")
          }
        >
          Романы
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default Filters;
