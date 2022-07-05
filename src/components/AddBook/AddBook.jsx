import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import { booksContext } from "../../contexts/booksContext";
import { useNavigate } from "react-router-dom";

export default function AddBook() {
  const navigate = useNavigate();
  //title, photo, year, price, chapter
  const { createBook } = React.useContext(booksContext);
  const [title, setTitle] = React.useState();
  const [author, setAuthor] = React.useState();
  const [photo, setPhoto] = React.useState();
  const [year, setYear] = React.useState();
  const [price, setPrice] = React.useState();
  const [chapter, setChapter] = React.useState();
  const [description, setDescription] = React.useState();

  function handleValues() {
    let newBook = {
      title,
      author,
      photo,
      price,
      year,
      chapter,
      description,
    };
    if (
      !title ||
      !author ||
      !photo ||
      !price ||
      !year ||
      !chapter ||
      !description
    ) {
      alert("Заполните все поля!");
      return;
    }
    createBook(newBook);
    navigate("/books");

    // console.log(newBook);
  }
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          margin: "15px 0",
          fontSize: { xs: "18px", sm: "23px", md: "27px", lg: "30px" },
        }}
      >
        {" "}
        Добавить новую книгу
      </Typography>
      <TextField
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        label="Название книги"
        sx={{ m: 1, width: "25ch" }}
        variant="filled"
      />
      <TextField
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        label="Автор книги"
        sx={{ m: 1, width: "25ch" }}
        variant="filled"
      />
      <TextField
        value={photo}
        onChange={(e) => setPhoto(e.target.value)}
        label="Фото книги"
        id="filled-start-adornment"
        sx={{ m: 1, width: "25ch" }}
        variant="filled"
      />
      <TextField
        value={year}
        onChange={(e) => setYear(e.target.value)}
        label="Год выпуска"
        id="filled-start-adornment"
        sx={{ m: 1, width: "25ch" }}
        variant="filled"
      />
      <TextField
        value={price}
        onChange={(e) => setPrice(+e.target.value)}
        type="number"
        label="Цена книги"
        id="filled-start-adornment"
        sx={{ m: 1, width: "25ch" }}
        variant="filled"
      />
      <TextField
        value={chapter}
        onChange={(e) => setChapter(e.target.value)}
        label="Раздел"
        id="filled-start-adornment"
        sx={{ m: 1, width: "25ch" }}
        variant="filled"
      />
      <TextField
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        label="Описание книги"
        id="filled-start-adornment"
        sx={{ m: 1, width: "25ch" }}
        variant="filled"
      />

      <Button
        style={{ margin: "10px 0px" }}
        variant="contained"
        onClick={handleValues}
      >
        Добавить книгу
      </Button>
    </Box>
  );
}
