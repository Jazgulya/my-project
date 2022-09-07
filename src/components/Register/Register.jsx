import {
  Alert,
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@mui/material";
// import { makeStyles, MuiThemeProvider } from "@material-ui/core";
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
    <Container>
      <Box
        height={"70vh"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Typography
          variant="h3"
          textAlign={"center"}
          sx={{
            fontSize: { sm: "30px", md: "40px", lg: "40px", xs: "20px" },
            marginTop: "15px",
          }}
        >
          Регистрация
        </Typography>
        {error ? <Alert severity="error">{error}</Alert> : null}
        <TextField
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
          size="small"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ margin: "0px 0" }}
          helperText="Введите пароль"
          id="demo-helper-text-aligned"
          label="Пароль"
        />
        <Button
          size="medium"
          onClick={() => handleValues()}
          variant="contained"
          color="success"
          sx={{
            margin: "10px",
            fontSize: { sm: "15px", md: "15px", lg: "15px", xs: "10px" },
          }}
        >
          Зарегистрироваться
        </Button>

        <Box display={"flex"} justifyContent={"center"} marginTop={"20px"}>
          <Typography
            sx={{
              fontSize: { xs: "15px", sm: "20px", md: "23px", lg: "25px" },
            }}
            variant="p"
            component="h2"
          >
            Уже есть аккаунт?
          </Typography>{" "}
        </Box>
        <Box display={"flex"} justifyContent={"center"} marginTop={"10px"}>
          <Typography
            sx={{
              fontSize: { xs: "15px", sm: "20px", md: "23px", lg: "25px" },
            }}
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
