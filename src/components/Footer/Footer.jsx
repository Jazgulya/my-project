import React from "react";
import { Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer
        style={{ backgroundColor: "darkblue", position: "static" }}
        className="footer"
      >
        <Box
          px={{ xs: 3, sm: 10 }}
          py={{ xs: 5, sm: 10 }}
          bgcolor="text.secondary"
          color="white"
        >
          <Container maxWidth="lg" height="100px">
            <Grid container spacing={5}>
              <Grid item xs={12} sm={3}>
                <Box>О нас</Box>
                <Box>
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "white" }}
                    color="inherit"
                  >
                    Главная страница
                  </Link>
                </Box>
                <Box>
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "white" }}
                    color="inherit"
                  >
                    Контакты
                  </Link>
                </Box>
                <Box>
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "white" }}
                    color="inherit"
                  >
                    Наши магазины
                  </Link>
                </Box>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Box>Книги</Box>
                <Box>
                  <Link
                    to="/books"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Список книг
                  </Link>
                </Box>
                <Box>
                  <Link
                    to="/favourites"
                    style={{ textDecoration: "none", color: "white" }}
                    color="white"
                  >
                    Избранное
                  </Link>
                </Box>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Box>Социальные сети</Box>
                <Box>
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "white" }}
                    color="inherit"
                  >
                    Facebook
                  </Link>
                </Box>
                <Box>
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "white" }}
                    color="inherit"
                  >
                    Instagram
                  </Link>
                </Box>
                <Box>
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "white" }}
                    color="inherit"
                  >
                    Whatsapp
                  </Link>
                </Box>
              </Grid>
            </Grid>
            <Box
              textAlign="center"
              pt={{ xs: 5, sm: 10 }}
              pb={{ xs: 5, sm: 0 }}
            >
              Material UI WorkShop &reg; {new Date().getFullYear()}
            </Box>
          </Container>
        </Box>
      </footer>
    </>
  );
};

export default Footer;
