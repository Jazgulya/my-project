import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import { booksContext } from "../../contexts/booksContext";
import { useNavigate, useParams } from "react-router-dom";

export default function EditBook() {
  //title, photo, year, price, chapter
  const { getOneBook, oneBook, updateBook } = React.useContext(booksContext);
  const [title, setTitle] = React.useState();
  const [photo, setPhoto] = React.useState();
  const [year, setYear] = React.useState();
  const [price, setPrice] = React.useState();
  const [chapter, setChapter] = React.useState();
  const [description, setDescription] = React.useState();
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    getOneBook(id);
  }, []);
  React.useEffect(() => {
    if (oneBook) {
      setTitle(oneBook.title);
      setPhoto(oneBook.photo);
      setYear(oneBook.year);
      setPrice(oneBook.price);
      setChapter(oneBook.chapter);
    }
  }, [oneBook]);

  if (!oneBook) {
    return <h2>Loading</h2>;
  }

  function handleValues() {
    let editedBook = {
      title,
      photo,
      price,
      year,
      chapter,
      description,
    };
    updateBook(id, editedBook);
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
      <Typography variant="h5"> Редактировать книгу</Typography>
      <TextField
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        label="Название книги"
        id="filled-start-adornment"
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
        label="Раздел"
        id="filled-start-adornment"
        sx={{ m: 1, width: "25ch" }}
        variant="filled"
      />

      <Button onClick={handleValues}>Сохранить изменения</Button>
    </Box>
  );
}
