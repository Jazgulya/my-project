// import React, { useState } from "react";
// import axios from "axios";
// import { Button, TextField } from "@mui/material";
// import SendIcon from "@mui/icons-material/Send";
// import useMutation from "use-mutation";

// async function createComment({ content, bookId }) {
//   await axios.post("http://localhost:8000/comments", {
//     content,
//     bookId,
//   });
// }

// const CommentsEdit = ({ bookId }) => {
//   const [content, setContent] = useState("");
//   const [mutate] = useMutation(createComment);
//   function onSubmitHandler(event) {
//     event.preventDefault();
//     // console.log("===");
//     mutate({ content, bookId }).then(() => {
//       setContent("");
//     });
//   }
//   return (
// <form
//   onSubmit={onSubmitHandler}
//   style={{ display: "flex", marginTop: "20px" }}
// >
//   <TextField
//     style={{ flex: "1" }}
//     label="Добавить комментарий"
//     size="small"
//     variant="outlined"
//     placeholder="Добавить комментарий"
//     value={content}
//     onChange={(e) => setContent(e.target.value)}
//   />
//   <Button
//     variant="contained"
//     size="small"
//     endIcon={<SendIcon />}
//     // disabled={!content}
//     type="submit"
//   >
//     Отправить
//   </Button>
// </form>
//   );
// };

// export default CommentsEdit;
