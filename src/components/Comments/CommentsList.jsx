import React from "react";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { Box, Button, Divider } from "@mui/material";

const CommentsList = ({
  setCommentEdit,
  comments,
  deleteComment,
  bookId,
  currentUser,
}) => {
  if (!comments) return <h2>loading</h2>;

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <ListItem
        style={{
          display: "flex",
          flexDirection: "column",
          border: "1px solid black",
        }}
        alignItems="flex-start"
      >
        {comments.map((item) =>
          bookId == item.bookId ? (
            <ListItemText
              style={{ width: "100%", border: "1px solid black" }}
              key={item.id}
              primary={currentUser.email}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {item.content}
                  </Typography>
                  <Box display={"flex"} justifyContent={"flex-end"}>
                    <Button
                      onClick={() => setCommentEdit(item)}
                      variant="contained"
                      color="primary"
                      style={{ marginRight: "10px" }}
                    >
                      {" "}
                      Edit{" "}
                    </Button>
                    <Button
                      onClick={() => deleteComment(item.id)}
                      color="error"
                      variant="contained"
                    >
                      {" "}
                      Delete{" "}
                    </Button>
                  </Box>
                </React.Fragment>
              }
            />
          ) : (
            ""
          )
        )}
      </ListItem>

      <Divider variant="inset" component="li" />
    </List>
  );
};

export default CommentsList;
