import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { Badge, Typography } from "@mui/material";
import { useCart } from "react-use-cart";
import "./Header.css";
import { authContext } from "../../contexts/authContext";

export default function Header() {
  const { currentUser, logOut } = React.useContext(authContext);
  const { totalItems } = useCart();
  const navigate = useNavigate();
  console.log(currentUser);
  return (
    <Box className="header" sx={{ flexGrow: 1 }}>
      <AppBar style={{ backgroundColor: "DarkBlue" }} position="static">
        <Toolbar style={{ display: "flex", justifyContent: "center" }}>
          <IconButton>
            <img
              style={{ width: "100px", borderRadius: "15px" }}
              src="https://www.logolynx.com/images/logolynx/5f/5f93593ccff40cc3d07eaecc453fb3d5.jpeg"
            />
          </IconButton>

          {currentUser ? (
            <Button
              onClick={() => {
                logOut();
                navigate("/login");
              }}
              color="inherit"
            >
              Выйти
            </Button>
          ) : (
            <>
              <Button onClick={() => navigate("/login")} color="inherit">
                Вход
              </Button>
              /
              <Button onClick={() => navigate("/register")} color="inherit">
                Регистрация
              </Button>
            </>
          )}

          <IconButton size="large" onClick={() => navigate("/cart")}>
            {" "}
            <Badge badgeContent={totalItems} color="error">
              <LocalMallIcon />
            </Badge>
          </IconButton>
          <Box marginLeft={"100px"}>
            {currentUser ? <Typography>{currentUser.email}</Typography> : null}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
