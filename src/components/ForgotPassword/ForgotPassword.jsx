import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import { Alert, Box, Button, Typography } from "@mui/material";
import { authContext } from "../../contexts/authContext";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const { forgotPassword, error } = useContext(authContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
          fontSize: { sm: "15px", md: "20px", lg: "30px", xs: "20px" },
        }}
      >
        {" "}
        Восстановление пароля
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

      <Button
        onClick={() => forgotPassword(email, navigate)}
        variant="contained"
        size="medium"
        sx={{
          margin: "10px",
          fontSize: { sm: "15px", md: "15px", lg: "15px", xs: "10px" },
        }}
      >
        Сбросить пароль
      </Button>

      <Box display={"flex"} justifyContent={"center"} marginTop={"10px"}>
        <Typography
          variant="p"
          color={"primary"}
          component="h2"
          onClick={() => navigate("/login")}
          sx={{
            cursor: "pointer",
            fontSize: { xs: "15px", sm: "20px", md: "23px", lg: "25px" },
          }}
        >
          Войдите
        </Typography>
      </Box>
    </Box>
  );
};

export default ForgotPassword;
