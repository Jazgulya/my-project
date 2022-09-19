import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../contexts/authContext";
import { useCart } from "react-use-cart";
import AdminPanel from "../AdminPanel/AdminPanel";

const Header = () => {
  const { currentUser, logOut, isAdmin } = React.useContext(authContext);
  const { totalItems } = useCart();
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <Tooltip title="Главная">
            <IconButton
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
              onClick={() => navigate("/")}
            >
              <img
                style={{ width: "100px", borderRadius: "15px" }}
                alt="logo"
                src="https://www.logolynx.com/images/logolynx/5f/5f93593ccff40cc3d07eaecc453fb3d5.jpeg"
              />
            </IconButton>
          </Tooltip>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <Tooltip title="Корзина">
                <IconButton
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                  onClick={() => navigate("/cart")}
                >
                  {" "}
                  <img
                    className="item"
                    style={{
                      width: "50px",
                      borderRadius: "15px",
                    }}
                    alt="Cart"
                    src="https://cdn-icons-png.flaticon.com/512/7687/7687644.png"
                  />{" "}
                  <Typography
                    style={{
                      textAlign: "center",
                      color: "white",
                      position: "absolute",
                      margin: "-65px 10px 30px 45px",
                      fontSize: "14px",
                      fontWeight: "400",
                      borderRadius: "10px",
                      borderColor: "ffffff",
                      height: "20px",
                      width: "20px",
                      backgroundColor: "red",
                    }}
                  >
                    {totalItems}
                  </Typography>
                </IconButton>
              </Tooltip>
              <Tooltip title="Избранное">
                <IconButton onClick={() => navigate("/favourites")}>
                  <img
                    className="item"
                    alt="favourites"
                    style={{
                      width: "60px",
                      borderRadius: "15px",
                    }}
                    src="https://cdn-icons-png.flaticon.com/512/7222/7222088.png"
                  />
                </IconButton>
              </Tooltip>
            </Menu>
          </Box>
          <Tooltip title="Главная страница">
            <IconButton
              sx={{ display: { xs: "flex", md: "none" }, mr: 2 }}
              onClick={() => navigate("/")}
            >
              <img
                style={{ width: "90px", borderRadius: "15px" }}
                alt="logo"
                src="https://www.logolynx.com/images/logolynx/5f/5f93593ccff40cc3d07eaecc453fb3d5.jpeg"
              />
            </IconButton>
          </Tooltip>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Tooltip title="Корзина">
              <IconButton onClick={() => navigate("/cart")}>
                {" "}
                <img
                  className="item"
                  style={{
                    width: "50px",
                    borderRadius: "15px",
                  }}
                  alt="Cart"
                  src="https://cdn-icons-png.flaticon.com/512/7687/7687644.png"
                />{" "}
                <Typography
                  style={{
                    textAlign: "center",
                    color: "white",
                    position: "absolute",
                    margin: "-25px 10px 30px 60px",
                    fontSize: "14px",
                    fontWeight: "400",
                    borderRadius: "10px",
                    borderColor: "ffffff",
                    height: "20px",
                    width: "20px",
                    backgroundColor: "red",
                  }}
                >
                  {totalItems}
                </Typography>
              </IconButton>
            </Tooltip>
            <Tooltip title="Избранное">
              <IconButton onClick={() => navigate("/favourites")}>
                <img
                  className="item"
                  alt="favourites"
                  style={{
                    width: "50px",
                  }}
                  src="https://cdn-icons-png.flaticon.com/512/7222/7222088.png"
                />
              </IconButton>
            </Tooltip>
          </Box>
          {isAdmin ? <Button variant="outlined" style={{ color: "white", border: "1px solid white", marginRight: "15px" }} onClick={() => navigate("/admin")}> Админ панель </Button> : null}

          <Box sx={{ flexGrow: 0 }}>


            <Tooltip title="Аккаунт">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  style={{
                    textTransform: "uppercase",
                    marginRight: "10px",
                    backgroundColor: "white",
                  }}
                >
                  <img
                    alt="login"
                    src="https://cdn-icons-png.flaticon.com/512/1177/1177568.png"
                    style={{ objectFit: "cover", width: "50px" }}
                  />
                </Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {currentUser ? (
                <Box className="item" display={"flex"} alignItems={"center"}>
                  <Avatar
                    style={{
                      textTransform: "uppercase",
                      marginRight: "10px",
                      backgroundColor: "red",
                    }}
                  >
                    {currentUser.email.slice(0, 1)}
                  </Avatar>
                  <Typography style={{ marginRight: "10px" }} component="h6">
                    {currentUser.email}
                  </Typography>
                </Box>
              ) : null}
              {currentUser ? (
                <Button
                  className="item"
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
                  <Button
                    className="item"
                    onClick={() => navigate("/login")}
                    color="inherit"
                  >
                    Войти
                  </Button>

                  <Button
                    className="item"
                    onClick={() => navigate("/register")}
                    color="inherit"
                  >
                    Регистрация
                  </Button>
                </>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar >
  );
};
export default Header;
