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
    <div style={{ backgroundColor: "#a7bcff", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Box width={"30vw"}
        height={"auto"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        backgroundColor={"white"}
        gap={"10px"}
        borderRadius={"15px"}
        padding={"40px"}
        margin={"50px 0px"}
      >
        <Typography
          variant="h3"
          textAlign={"center"}
          sx={{
            fontSize: { sm: "25px", md: "35px", lg: "35px", xs: "15px" },

          }}
        >
          Регистрация
        </Typography>
        {error ? <Alert severity="error">{error}</Alert> : null}
        <TextField fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            margin: "15px 0",
          }}
          size="small"
          id="demo-helper-text-aligned"
          label="Аккаунт"
        />
        <TextField fullWidth
          size="small"
          value={password}
          onChange={(e) => setPassword(e.target.value)}

          id="demo-helper-text-aligned"
          label="Пароль"
        />
        <Button fullWidth
          size="medium"
          onClick={() => handleValues()}
          variant="contained"
          color="warning"
          sx={{
            margin: "10px",
            fontSize: { sm: "15px", md: "15px", lg: "15px", xs: "10px" },
          }}
        >
          Зарегистрироваться
        </Button>

        <Box display={"flex"} justifyContent={"center"} marginTop={"10px"}>
          <Typography
            sx={{
              fontSize: { xs: "12px", sm: "18px", md: "20px", lg: "20px" },
            }}
            variant="h6"
            component="h4"
          >
            Уже есть аккаунт?
          </Typography>{" "}
        </Box>

        <Button fullWidth onClick={() => navigate("/login")} variant="outlined" color="primary"> Войти</Button>
      </Box>
    </div>
  );
};

export default Register;
