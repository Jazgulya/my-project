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
    <Box
      height={"70vh"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Typography textAlign={"center"} variant="h4">
        Регистрация
      </Typography>
      {error ? <Alert severity="error">{error}</Alert> : null}
      <TextField
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: "40%", margin: "15px 0" }}
        helperText="Введите аккаунт"
        id="demo-helper-text-aligned"
        label="Аккаунт"
      />
      <TextField
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: "40%", margin: "0px 0" }}
        helperText="Введите пароль"
        id="demo-helper-text-aligned"
        label="Пароль"
      />
      <Button
        onClick={() => handleValues()}
        variant="contained"
        color="success"
        style={{ width: "40%", margin: "10px" }}
      >
        Зарегистрироваться
      </Button>

      <Box display={"flex"} justifyContent={"center"} marginTop={"20px"}>
        <Typography variant="p" component="h2">
          Уже есть аккаунт?
        </Typography>{" "}
      </Box>
      <Box display={"flex"} justifyContent={"center"} marginTop={"10px"}>
        <Typography
          variant="p"
          color={"primary"}
          style={{ cursor: "pointer" }}
          component="h2"
          onClick={() => navigate("/login")}
        >
          Войти
        </Typography>
      </Box>
    </Box>
  );
};

export default Register;
