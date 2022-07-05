import React, { useContext } from "react";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { Avatar, Box, Button, Divider } from "@mui/material";
import { red } from "@mui/material/colors";
import { authContext } from "../../contexts/authContext";

const CommentsList = ({ setCommentEdit, comments, deleteComment, bookId }) => {
  const { currentUser } = useContext(authContext);

  if (!comments) return <h2>loading</h2>;
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      <ListItem
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          border: "1px solid black",
        }}
      >
        {" "}
        <Typography textAlign={"center"} variant="h5">
          {" "}
          Отзывы читателей
        </Typography>
        {comments.map((item) =>
          bookId == item.bookId ? (
            <ListItemText
              style={{
                width: { xs: "100%", md: "50%" },
                // border: "1px solid black",
              }}
              key={item.id}
              primary={
                <React.Fragment>
                  <Box
                    display={"flex"}
                    justifyContent={"space-around"}
                    alignItems={"center"}
                    backgroundColor={"PaleTurquoise"}
                  >
                    <Avatar
                      style={{ textTransform: "uppercase", margin: "10px" }}
                      sx={{ bgcolor: red[500] }}
                      aria-label="recipe"
                    >
                      {item.user.slice(0, 1)}
                    </Avatar>
                    <Box display={"flex"} flexWrap={"wrap"}>
                      <Typography component={"span"} variant={"body2"}>
                        {item.user}
                      </Typography>
                      <Typography
                        variant={"body2"}
                        style={{ fontSize: "15px", margin: "0 15px" }}
                      >
                        {" "}
                        {item.date}
                      </Typography>
                      <Typography
                        variant={"body2"}
                        style={{ fontSize: "15px", marginRight: "10px" }}
                      >
                        {" "}
                        {item.time}
                      </Typography>
                    </Box>
                  </Box>
                </React.Fragment>
              }
              secondary={
                <React.Fragment>
                  <Box margin={"15px"}>
                    <Typography
                      component={"span"}
                      variant={"body2"}
                      sx={{ display: "inline" }}
                      color="text.primary"
                    >
                      {item.content}
                    </Typography>
                  </Box>

                  <Box display={"flex"} justifyContent={"flex-end"}>
                    {currentUser?.email === item?.user ? (
                      <>
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
                      </>
                    ) : null}
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
