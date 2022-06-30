import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";

const CommentAdd = ({
  bookId,
  createComment,
  commentEdit,
  setCommentEdit,
  updateComment,
  currentUser,
}) => {
  const [content, setContent] = useState("");

  React.useEffect(() => {
    setContent(commentEdit.content);
  }, [commentEdit]);

  function handleValues() {
    let newComment = {
      content,
      bookId,
      user: currentUser.email,
    };
    createComment(newComment);
    setContent("");
  }

  function editComment() {
    let editedComment = {
      content,
    };
    updateComment(commentEdit.id, editedComment);
    setContent("");
  }
  return (
    <div style={{ display: "flex", marginTop: "20px" }}>
      <Typography variant="h6"> {currentUser.email}</Typography>
      <TextField
        style={{ flex: "1" }}
        label="Добавить комментарий"
        size="small"
        variant="outlined"
        placeholder="Добавить комментарий"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      {commentEdit ? (
        <>
          <Button
            onClick={() => {
              setContent("");
              setCommentEdit(false);
            }}
            variant="contained"
            size="small"
          >
            Отменить
          </Button>
          <Button
            onClick={() => editComment()}
            variant="contained"
            size="small"
            color="error"
          >
            Сохранить
          </Button>
        </>
      ) : (
        <Button
          onClick={handleValues}
          variant="contained"
          size="small"
          endIcon={<SendIcon />}
        >
          Отправить
        </Button>
      )}
    </div>
  );
};

export default CommentAdd;
