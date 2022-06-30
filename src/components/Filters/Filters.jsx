import { Button, ButtonGroup, Typography } from "@mui/material";
import React, { useContext } from "react";
import { booksContext } from "../../contexts/booksContext";

const Filters = () => {
  const { filterByTag } = useContext(booksContext);

  return (
    <div>
      <Typography> По категории</Typography>

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
      </ButtonGroup>
    </div>
  );
};

export default Filters;
