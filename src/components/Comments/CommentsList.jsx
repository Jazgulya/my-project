import React, { useContext, useEffect, useState } from "react";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { Box, Button, Divider } from "@mui/material";

const CommentsList = ({
  comments,
  getComments,
  currentUser,
  deleteComment,
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
        {comments.map((item) => (
          <ListItemText
            style={{ width: "100%", border: "1px solid black" }}
            key={item.id}
            primary="UserName"
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
        ))}
      </ListItem>

      <Divider variant="inset" component="li" />
    </List>
    // <Container>
    //   <TextField
    //     value={date}
    //     onChange={(e) => setDate(e.target.value)}
    //     label="Раздел"
    //     id="filled-start-adornment"
    //     sx={{ m: 1, width: "25ch" }}
    //     variant="filled"
    //   />
    //   <TextField
    //     value={user}
    //     onChange={(e) => setUser(e.target.value)}
    //     label="Раздел"
    //     id="filled-start-adornment"
    //     sx={{ m: 1, width: "25ch" }}
    //     variant="filled"
    //   />
    //   <TextField
    //     value={comment}
    //     onChange={(e) => setComment(e.target.value)}
    //     label="Раздел"
    //     id="filled-start-adornment"
    //     sx={{ m: 1, width: "25ch" }}
    //     variant="filled"
    //   />
    //   <Button variant="fill" color="success" onClick={handleValues}>
    //     {" "}
    //     Отправить комментарий
    //   </Button>
    // </Container>
  );
};

export default CommentsList;
