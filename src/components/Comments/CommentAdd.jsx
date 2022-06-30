import { Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import { commentsContext } from "../../contexts/commentsContext";

const CommentAdd = ({ bookId, createComment }) => {
  function handleValues() {
    let newComment = {
      content,
      bookId,
    };
    createComment(newComment);
    console.log(newComment);
  }

  const [content, setContent] = useState("");
  return (
    <form style={{ display: "flex", marginTop: "20px" }}>
      <TextField
        style={{ flex: "1" }}
        label="Добавить комментарий"
        size="small"
        variant="outlined"
        placeholder="Добавить комментарий"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Button
        onClick={handleValues}
        variant="contained"
        size="small"
        endIcon={<SendIcon />}
        // disabled={!content}
        type="submit"
      >
        Отправить
      </Button>
    </form>
  );
};

export default CommentAdd;
