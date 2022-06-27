import { Button, Container, TextField } from "@mui/material";
import React, { useContext, useState, useParams, useEffect } from "react";
import { booksContext } from "../../contexts/booksContext";

const Comments = () => {
  const { createComment, getOneBook, oneBook } = useContext(booksContext);
  const [user, setUser] = useState("");
  const [comment, setComment] = useState("");
  const [date, setDate] = useState("");
  const { id } = useParams();
  useEffect(() => {
    getOneBook(id);
  }, []);
  function handleValues() {
    let newComment = {
      date,
      comment,
      user,
    };
    createComment(id, newComment);
  }

  return (
    <Container>
      <TextField
        value={date}
        onChange={(e) => setDate(e.target.value)}
        label="Раздел"
        id="filled-start-adornment"
        sx={{ m: 1, width: "25ch" }}
        variant="filled"
      />
      <TextField
        value={user}
        onChange={(e) => setUser(e.target.value)}
        label="Раздел"
        id="filled-start-adornment"
        sx={{ m: 1, width: "25ch" }}
        variant="filled"
      />
      <TextField
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        label="Раздел"
        id="filled-start-adornment"
        sx={{ m: 1, width: "25ch" }}
        variant="filled"
      />
      <Button variant="fill" color="success" onClick={handleValues}>
        {" "}
        Отправить комментарий
      </Button>
    </Container>
  );
};

export default Comments;
