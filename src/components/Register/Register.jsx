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
  const { register, error } = useContext(authContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  function handleValues() {
    let user = {
      email,
      password,
      passwordConfirm,
    };
    register(user, navigate);
  }

  return (
    <Container maxwidth={"sm"}>
      <Box
        margin={"20px"}
        display={"flex"}
        flexDirection={"column"}
        width={"450px"}
      >
        <Typography textAlign={"center"} variant="h5">
          Регистрация
        </Typography>
        {error ? (
          <Box>
            {" "}
            {error.map((item, index) => (
              <Alert key={item + index} severity="error">
                {" "}
                {item}
              </Alert>
            ))}
          </Box>
        ) : null}
        <TextField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ margin: "15px 0" }}
          helperText="Введите свой аккаунт"
          id="demo-helper-text-aligned"
          label="Аккаунт"
        />
        <TextField
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ margin: "0px 0" }}
          helperText="Введите пароль"
          id="demo-helper-text-aligned"
          label="Пароль"
        />
        <TextField
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          style={{ margin: "15px 0" }}
          helperText="Введите еще раз пароль"
          id="demo-helper-text-aligned"
          label="Пароль"
        />
        <Box display={"flex"} justifyContent={"center"}>
          <Button
            onClick={() => handleValues()}
            variant="contained"
            color="success"
          >
            Зарегистрироваться
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Register;
