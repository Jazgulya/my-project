import {
  Alert,
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles, MuiThemeProvider } from "@material-ui/core";
import React, { useContext, useState } from "react";
import { authContext } from "../../contexts/authContext";
import { useNavigate } from "react-router-dom";
import { ClassNames } from "@emotion/react";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

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
  typography: {
    variant: "h3",
    [theme.breakpoints.down("md")]: {
      variant: "h5",
    },
  },
}));

const Register = () => {
  const classes = useStyles();
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
    <Container>
      <Box
        height={"70vh"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Typography className="typography" variant="h3" textAlign={"center"}>
          Регистрация
        </Typography>
        {error ? <Alert severity="error">{error}</Alert> : null}
        <TextField
          className={classes.textField}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            margin: "15px 0",
          }}
          size="small"
          helperText="Введите аккаунт"
          id="demo-helper-text-aligned"
          label="Аккаунт"
        />
        <TextField
          className={classes.textField}
          size="small"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ margin: "0px 0" }}
          helperText="Введите пароль"
          id="demo-helper-text-aligned"
          label="Пароль"
        />
        <Button
          className={classes.button}
          size="medium"
          onClick={() => handleValues()}
          variant="contained"
          color="success"
          style={{ margin: "10px" }}
        >
          Register
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
    </Container>
  );
};

export default Register;
