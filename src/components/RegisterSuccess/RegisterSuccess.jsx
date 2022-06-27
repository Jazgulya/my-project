import { Link, Typography } from "@mui/material";
import React from "react";

const RegisterSuccess = () => {
  return (
    <div>
      <Typography variant="h5">
        {" "}
        Вы успешно зарегистрировались. Можете <Link to="/login">войти</Link> в
        свой аккаунт{" "}
      </Typography>
    </div>
  );
};

export default RegisterSuccess;
