import React, { useContext, useRef, useState } from "react";
import { Avatar, Button, Container, Grid, TextField } from "@mui/material";
import { authContext } from "../../contexts/authContext";
import { useCollectionData } from "react-firebase-hooks/firestore";
import fire from "../../fire";
import firebase from "firebase/compat/app";
import { red } from "@mui/material/colors";

const Chat = () => {
  const scroll = useRef();
  const firestore = fire.firestore();
  const { currentUser } = useContext(authContext);
  const [value, setValue] = useState("");
  const [messages, loading] = useCollectionData(
    firestore.collection("messages").orderBy("createdAt")
  );
  const sendMessage = async () => {
    await firestore.collection("messages").add({
      uid: currentUser.uid,
      email: currentUser.email,
      text: value,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setValue("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
    console.log(messages);
  };

  if (loading) {
    return <h2>Loading</h2>;
  }
  return (
    <Container>
      <Grid
        container
        justify={"center"}
        style={{ height: window.innerHeight - 50, marginTop: 20 }}
      >
        <div
          style={{
            width: "80%",
            height: "70vh",
            border: "1px solid grey",
            overflowY: "auto",
          }}
        >
          {" "}
          {messages?.map((message) => (
            < div
              style={{
                width: "30%",
                margin: "10px",
                border:
                  currentUser?.uid === message.uid
                    ? "2px solid green"
                    : "2px dashed red",
                marginLeft: currentUser.uid === message.uid ? "auto" : "10px",
              }}
            >
              <Grid
                container
                style={{
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid black",
                }}
              >
                <Avatar
                  sx={{ bgcolor: red[500] }}
                  aria-label="recipe"
                  style={{ textTransform: "uppercase", marginLeft: "5px" }}
                >
                  {message.email.slice(0, 1)}
                </Avatar>

                <div
                  style={{
                    marginTop: "20px",
                    marginLeft: "5px",
                  }}
                >
                  {" "}
                  {message.email}
                </div>
              </Grid>
              <div style={{ marginLeft: "50px" }}>{message.text}</div>
              <div ref={scroll}></div>
            </div>
          ))}{" "}
        </div>

        <Grid
          container
          direction={"column"}
          alignItems={"flex-end"}
          style={{ width: "80%" }}
        >
          <TextField
            value={value}
            onChange={(e) => setValue(e.target.value)}
            fullWidth
            maxRows={2}
            variant={"outlined"}
          />
          <Button onClick={sendMessage} variant={"outlined"}>
            Отправить
          </Button>
        </Grid>
      </Grid>
    </Container >
  );
};

export default Chat;
