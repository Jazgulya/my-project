import React, { useContext, useState, useRef, useEffect } from "react";

import {
  Box,
  Button,
  ClickAwayListener,
  Container,
  Popper,
  Grow,
  MenuList,
  Pagination,
  Paper,
  Typography, Slider, Grid, Link, Breadcrumbs
} from "@mui/material";

import { useNavigate, useSearchParams } from "react-router-dom";
import { authContext } from "../../contexts/authContext";
import { booksContext } from "../../contexts/booksContext";
import BooksCard from "../BooksCard/BooksCard";
import SearchField from "../SearchField/SearchField";
import SideBar from "../SideBar/SideBar";
import "./BooksList.css";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const BooksList = () => {
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const { getBooks, books, pages, filterByTag } = useContext(booksContext);
  const { isAdmin } = useContext(authContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(
    searchParams.get("") ? searchParams.get("q") : ""
  );

  const [page, setPage] = useState(1);
  const [price, setPrice] = useState([200, 5000]);
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
  useEffect(() => {
    getBooks();
  }, []);
  useEffect(() => {
    setSearchParams({
      q: search,
      _page: page,
      // brand: brand,
      _limit: 6,
      price_gte: price[0],
      price_lte: price[1],
    });
  }, [page, price, search]);

  useEffect(() => {
    getBooks();
  }, [searchParams]);

  if (!books) return <h2>not found</h2>;

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open

  return (<Container style={{ marginTop: "15px", marginLeft: "-10px" }}>

    <Box display={"flex"}>

      <SideBar price={price} setPrice={setPrice} />

      <Box>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          <Link style={{ cursor: "pointer" }} underline="hover" key="1" color="inherit" onClick={() => navigate("/")}>
            Главная
          </Link>,
          <Typography key="2" color="text.primary">
            Список книг
          </Typography>
        </Breadcrumbs>
        <Typography
          textAlign={"center"}
          sx={{
            margin: "10px",
            fontSize: { xs: "22px", sm: "25px", md: "25px", lg: "30px" },
          }}
        >
          Список книг
        </Typography>
        {/* Filters */}
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <Button
            ref={anchorRef}
            id="composition-button"
            aria-controls={open ? "composition-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
            style={{ margin: "10px" }}
          >
            По категории
          </Button>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            placement="bottom-start"
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom-start" ? "left top" : "left bottom",
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      style={{ display: "flex", flexDirection: "column" }}
                      autoFocusItem={open}
                      id="composition-menu"
                      aria-labelledby="composition-button"
                      onKeyDown={handleListKeyDown}
                    >
                      <Button onClick={() => filterByTag("chapter", "all")}>
                        Все
                      </Button>
                      <Button
                        onClick={() =>
                          filterByTag("chapter", "Популярная психология")
                        }
                      >
                        Популярная психология
                      </Button>
                      <Button onClick={() => filterByTag("chapter", "Романы")}>
                        Семейная психология
                      </Button>
                      <Button
                        onClick={() => filterByTag("chapter", "Детективы")}
                      >
                        Детективы
                      </Button>
                      <Button
                        onClick={() => filterByTag("chapter", "Автобиографии")}
                      >
                        Автобиографии
                      </Button>
                      <Button
                        onClick={() =>
                          filterByTag("chapter", "Современная зарубежная проза")
                        }
                      >
                        Современная зарубежная проза
                      </Button>
                      {/* <Button onClick={() => filterByTag("chapter", "Романы")}>
                        Романы
                      </Button> */}
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
          <Box
            marginLeft={"10px"}
            width={"100px"}
            sx={{ display: { xs: "inline", md: "none" } }}
          >
            <Button style={{ marginTop: "8px" }} variant="contained">
              По цене
            </Button>
            <Slider
              getAriaLabel={() => "Temperature range"}
              value={price}
              onChange={(e, value) => setPrice(value)}
              valueLabelDisplay="auto"
              min={200}
              max={5000}
              step={50}
            />
          </Box>
        </Box>
        <Box sx={{ margin: "10px", display: { xs: "flex", md: "none" } }}>
          <SearchField search={search} setSearch={setSearch} />
        </Box>

        <Grid container spacing={4}>
          {books.map((item) => (
            <BooksCard key={item.id} item={item} />
          ))}
        </Grid>
        <Box
          margin={"15px 0"}
          display={"flex"}
          justifyContent={"center"}
          width={"100%"}
        >
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
  </Container>
  );
};

export default BooksList;
