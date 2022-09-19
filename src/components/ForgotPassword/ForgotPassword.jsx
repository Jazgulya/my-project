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
            fontSize: { sm: "15px", md: "20px", lg: "30px", xs: "20px" },
          }}
        >
          {" "}
          Восстановление пароля
        </Typography>
        {error ? <Alert severity="error">{error}</Alert> : null}
        <TextField fullWidth
          size="small"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ margin: "10px" }}
          label="Аккаунт"
          variant="outlined"
        />

        <Button fullWidth
          onClick={() => forgotPassword(email, navigate)}
          variant="outlined"
          color="error"
          size="medium"
          sx={{
            margin: "10px",
            fontSize: { sm: "15px", md: "15px", lg: "15px", xs: "10px" },
          }}
        >
          Сбросить пароль
        </Button>

        < Button fullWidth onClick={() => navigate("/login")} variant="contained" color="primary"> Войти</Button>

      </Box>
    </div>
  );
};

export default ForgotPassword;
