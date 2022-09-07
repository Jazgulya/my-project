import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import { Alert, Box, Button, Typography } from "@mui/material";
import { authContext } from "../../contexts/authContext";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";


const Login = () => {
  const { login, error, signInWithGoogle } = useContext(authContext);
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
      <Typography
        textAlign={"center"}
        sx={{
          fontSize: { sm: "30px", md: "40px", lg: "40px", xs: "20px" },
        }}
      >
        {" "}
        Вход
      </Typography>
      {error ? <Alert severity="error">{error}</Alert> : null}
      <TextField
        size="small"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ margin: "10px" }}
        helperText="Введите аккаунт"
        label="Аккаунт"
        variant="outlined"
      />
      <TextField
        size="small"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        label="Пароль"
        helperText="Введите пароль"
        variant="outlined"
      />
      <Box display={"flex"} justifyContent={"flex-end"} marginTop={"10px"}>
        <Typography
          variant="p"
          color={"primary"}
          component="h2"
          onClick={() => navigate("/forgot-password")}
          sx={{
            cursor: "pointer",
            fontSize: { xs: "8px", sm: "10px", md: "15px", lg: "15px" },
          }}
        >
          Забыли пароль?
        </Typography>
      </Box>
      <Button
        onClick={handleValues}
        variant="contained"
        size="medium"
        sx={{
          margin: "10px",
          fontSize: { sm: "15px", md: "15px", lg: "15px", xs: "10px" },
        }}
      >
        Войти
      </Button>
      {/*
       */}
      <Box display={"flex"} justifyContent={"center"} marginTop={"20px"}>
        <Typography
          variant="p"
          component="h2"
          sx={{
            fontSize: { xs: "15px", sm: "20px", md: "23px", lg: "25px" },
          }}
        >
          Нет аккаунта?
        </Typography>
      </Box>
      <Box display={"flex"} justifyContent={"center"} marginTop={"10px"}>
        <Typography
          variant="p"
          color={"primary"}
          component="h2"
          onClick={() => navigate("/register")}
          sx={{
            cursor: "pointer",
            fontSize: { xs: "15px", sm: "20px", md: "23px", lg: "25px" },
          }}
        >
          Зарегистрируйтесь
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;
