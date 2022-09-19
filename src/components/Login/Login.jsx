import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import { Alert, Box, Button, Typography } from "@mui/material";
import { authContext } from "../../contexts/authContext";
import { useNavigate } from "react-router-dom";


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
    <div style={{ backgroundColor: "#a7bcff", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Box
        width={"30vw"}
        height={"auto"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        backgroundColor={"white"}
        gap={"15px"}
        borderRadius={"15px"}
        padding={"40px"}
        margin={"50px 0px"}
      >

        <Typography
          textAlign={"center"}
          sx={{
            fontSize: { sm: "25px", md: "35px", lg: "35px", xs: "15px" },
          }}
        >
          {" "}
          Вход
        </Typography>
        {error ? <Alert severity="error">{error}</Alert> : null}
        <TextField fullWidth
          size="small"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            margin: "10px 0",
          }}
          label="Аккаунт"
          variant="outlined"
        />
        <TextField fullWidth
          size="small"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Пароль"
          variant="outlined"
        />

        <Button fullWidth
          size="medium"
          onClick={() => handleValues()}
          variant="contained"
          color="warning"
          sx={{
            fontSize: { sm: "15px", md: "15px", lg: "15px", xs: "10px" },
          }}
        >
          Войти
        </Button>
        <Box style={{ width: "100%", marginTop: "-8px", display: "flex", justifyContent: "flex-end" }}>
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

        <Box display={"flex"} justifyContent={"center"} marginTop={"10px"}>
          <Typography
            sx={{
              fontSize: { xs: "12px", sm: "18px", md: "20px", lg: "20px" },
            }}
            variant="h6"
            component="h4"
          >
            Нет аккаунта?
          </Typography>{" "}
        </Box>

        < Button fullWidth onClick={() => navigate("/register")} variant="outlined" color="primary"> Зарегистрируйтесь</Button>

      </Box>
    </div >
  );
};

export default Login;
