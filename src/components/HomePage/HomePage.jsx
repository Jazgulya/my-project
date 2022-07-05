import { Box, Button, CardMedia, Container, Typography } from "@mui/material";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useNavigate } from "react-router-dom";
import bgImage from "../video/video.mp4";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <Container className="App">
      <Box
        display={"flex"}
        flexDirection={{ xs: "column", md: "row", lg: "row" }}
        style={{
          margin: "10px 0",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            cursor: "pointer",
            fontSize: { xs: "18px", sm: "22px", md: "22px", lg: "25px" },
          }}
        >
          {" "}
          "Книги- это получить в дар весь мир..."
        </Typography>
        <Button
          style={{ marginLeft: "15px" }}
          variant="outlined"
          onClick={() => navigate("/books")}
        >
          Список книг
        </Button>
      </Box>
      <Container>
        <Carousel>
          <CardMedia
            style={{ objectFit: "cover" }}
            component="img"
            width="100%"
            height="100%"
            image="https://kirgizskaski.ru/wp-content/uploads/9/7/f/97fe160017211bb101ceb5d245cd13e7.jpeg"
          />
          <CardMedia
            style={{ objectFit: "cover" }}
            component="img"
            width="100%"
            height="100%"
            image="https://cdn.culture.ru/images/505f4f8d-4cd4-5b13-85c4-68b4a4755644"
          />
          <CardMedia
            style={{ objectFit: "cover" }}
            component="img"
            width="100%"
            height="100%"
            image="https://i.sunhome.ru/psychology/240/pochemu-chitat-knigi-polezno.2959.orig.jpg"
          />
        </Carousel>
      </Container>
      <video style={{ marginTop: "5px" }} autoPlay loop muted type="video/mp4">
        <source src={bgImage}></source>
      </video>
    </Container>
  );
};

export default HomePage;
