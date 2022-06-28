import {
  Alert,
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { authContext } from "../../contexts/authContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { signUp, error } = useContext(authContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleValues() {
    if (!email || !password) {
      alert("Заполните все поля");
      return;
    }
    signUp(email, password, navigate);
  }

  return (
    <Container maxwidth={"sm"}>
      <Box
        margin={"20px"}
        display={"flex"}
        flexDirection={"column"}
        width={"450px"}
      >
        <Typography textAlign={"center"} variant="h5">
          Регистрация
        </Typography>
        {error ? <Alert severity="error">{error}</Alert> : null}
        <TextField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ margin: "15px 0" }}
          helperText="Введите свой аккаунт"
          id="demo-helper-text-aligned"
          label="Аккаунт"
        />
        <TextField
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ margin: "0px 0" }}
          helperText="Введите пароль"
          id="demo-helper-text-aligned"
          label="Пароль"
        />
        <Box display={"flex"} justifyContent={"center"}>
          <Button
            onClick={() => handleValues()}
            variant="contained"
            color="success"
          >
            Зарегистрироваться
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Register;
