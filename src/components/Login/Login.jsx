import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import { Alert, Box, Button, Typography } from "@mui/material";
import { authContext } from "../../contexts/authContext";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  textField: {
    width: 400,
    [theme.breakpoints.down("xs")]: {
      width: 200,
    },
  },
  button: {
    width: 300,
    [theme.breakpoints.down("xs")]: {
      width: 150,
    },
  },
}));
const Login = () => {
  const classes = useStyles();
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
        className={classes.textField}
        size="small"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ margin: "10px" }}
        helperText="Введите аккаунт"
        label="Аккаунт"
        variant="outlined"
      />
      <TextField
        className={classes.textField}
        size="small"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        label="Пароль"
        helperText="Введите пароль"
        variant="outlined"
      />
      <Button
        onClick={handleValues}
        style={{ margin: "10px" }}
        variant="contained"
        className={classes.button}
        size="medium"
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
