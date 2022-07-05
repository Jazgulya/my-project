import { Avatar, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import { red } from "@mui/material/colors";
import dateTime from "date-time";

const CommentAdd = ({
  bookId,
  createComment,
  commentEdit,
  setCommentEdit,
  updateComment,
  currentUser,
  getComments,
}) => {
  const [content, setContent] = useState("");

  const currDate = new Date().toLocaleDateString();
  const currTime = new Date().toLocaleTimeString();

  React.useEffect(() => {
    setContent(commentEdit.content);
  }, [commentEdit]);

  function handleValues() {
    let newComment = {
      content,
      bookId,
      user: currentUser.email,
      date: currDate,
      time: currTime,
    };
    // console.log(newComment);
    createComment(newComment);
    setContent("");
  }

  function editComment() {
    let editedComment = {
      content,
      date: currDate,
      time: currTime,
    };
    updateComment(commentEdit.id, editedComment);
    getComments();
    setContent("");
  }
  return (
    <div style={{ display: "flex", marginTop: "20px" }}>
      <TextField
        value={content}
        onChange={(e) => setContent(e.target.value)}
        style={{ flex: "1" }}
        label="Добавить отзыв"
        size="small"
        variant="outlined"
        placeholder="Добавить отзыв"
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
            onClick={() => {
              editComment();
              getComments();
              setCommentEdit(false);
            }}
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
