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
      <Container >
        <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true} showIndicators={true} useKeyboardArrows={true} transitionTime={200} showStatus={false}
        >
          <div style={{ height: "300px", width: "100vw" }} >
            <img style={{ objectFit: 'fill' }} src="https://ndc.book24.ru/resize/2200x640/iblock/321/3210659f72fbe0be5283d1d964b10a68/0b27e8b2566d43010405cdcfc330f30a.jpg" />

          </div>
          <div style={{ height: "300px", width: "100vw" }}>
            <img style={{ objectFit: 'fill' }} src="https://ndc.book24.ru/resize/2200x640/iblock/c59/c59d8d3c5f8023d19cc261f1069986f7/c1a82c926c575fa319035a94395b1870.jpg" />

          </div>
          <div style={{ height: "300px", width: "100vw" }}>
            <img style={{ objectFit: 'fill' }} src="https://ndc.book24.ru/resize/2200x640/iblock/ad1/ad13c659bc729d463abbf212f3edd707/027dd17a756d56ff0434737348b09dc7.jpg" />

          </div>
          <div style={{ height: "300px", width: "100vw" }}>
            <img style={{ objectFit: 'fill' }} src="https://ndc.book24.ru/resize/2200x640/iblock/082/082d254e4f6c80eb0a5139772a38c835/6d89a8e968fe8e52f57e76f731d187cd.jpg" />

          </div>

        </Carousel>
      </Container>
      <video style={{ marginTop: "5px" }} autoPlay loop muted type="video/mp4">
        <source src={bgImage}></source>
      </video>
    </Container>
  );
};

export default HomePage;

//Carousel
//infinityLoop - бесконечное пролистывание
//showThumbs: убрать эскизы
//индикаторы это маленькие точки
//useKeyboardArrows = листается карусель на клавишу пробела
//showStatus = нумерация в верхнем углу