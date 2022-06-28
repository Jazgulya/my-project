import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { Badge } from "@mui/material";
import { useCart } from "react-use-cart";

export default function Header() {
  const { totalItems } = useCart();
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <IconButton size="large" onClick={() => navigate("/cart")}>
            {" "}
            <Badge badgeContent={totalItems} color="error">
              <LocalMallIcon />
            </Badge>
          </IconButton>
          <Button
            onClick={() => navigate("/login")}
            style={{ marginRight: "15px" }}
            color="inherit"
          >
            Login
          </Button>
          <Button onClick={() => navigate("/register")} color="inherit">
            Register
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
