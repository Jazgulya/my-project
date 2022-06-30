import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import { Alert, Box, Button, Typography } from "@mui/material";
import { authContext } from "../../contexts/authContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login, error } = useContext(authContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleValues() {
    if (!email || !password) {
      alert("Заполните поля");
      return;
    }
    login(email, password, navigate);
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
        Вход
      </Typography>
      {error ? <Alert severity="error">{error}</Alert> : null}
      <TextField
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: "40%", margin: "10px" }}
        id="outlined-basic"
        helperText="Введите аккаунт"
        label="Аккаунт"
        variant="outlined"
      />
      <TextField
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: "40%" }}
        id="outlined-basic"
        label="Пароль"
        helperText="Введите пароль"
        variant="outlined"
      />
      <Button
        onClick={handleValues}
        style={{ width: "40%", margin: "10px" }}
        variant="contained"
      >
        Войти
      </Button>
      <Box display={"flex"} justifyContent={"center"} marginTop={"20px"}>
        <Typography variant="p" component="h2">
          Нет аккаунта?
        </Typography>
      </Box>
      <Box display={"flex"} justifyContent={"center"} marginTop={"10px"}>
        <Typography
          variant="p"
          color={"primary"}
          style={{ cursor: "pointer" }}
          component="h2"
          onClick={() => navigate("/register")}
        >
          Зарегистрируйтесь
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;
