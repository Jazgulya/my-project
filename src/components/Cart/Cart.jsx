import React from "react";
import { useCart } from "react-use-cart";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const Cart = () => {
  const navigate = useNavigate();
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    cartTotal,
    totalItems,
    emptyCart,
  } = useCart();

  if (isEmpty)
    return (
      <Typography
        style={{ marginTop: "80px", marginBottom: "20px", textAlign: "center" }}
        variant="h5"
      >
        {" "}
        Ваша корзина пуста
      </Typography>
    );

  return (
    <Container style={{ marginTop: "100px" }}>
      <Typography style={{ textAlign: "center", fontSize: "30px" }}>
        {" "}
        Ваша корзина
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Photo</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Edit Quantity</TableCell>
              <TableCell>Delete </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item, index) => {
              return (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>
                    <img src={item.photo} style={{ height: "6rem" }} />
                  </TableCell>
                  <TableCell>{item.title}</TableCell>
                  <TableCell>{item.price}</TableCell>
                  <TableCell> {item.quantity}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="success"
                      style={{
                        width: "5px",
                        height: "30px",
                      }}
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity - 1)
                      }
                    >
                      -
                    </Button>
                    <Button
                      variant="contained"
                      color="success"
                      style={{
                        marginLeft: "20px",
                        width: "5px",
                        height: "30px",
                      }}
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="error"
                      style={{
                        width: "5px",
                        height: "30px",
                      }}
                      onClick={() => removeItem(item.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          margin: "30px",
        }}
      >
        {" "}
        <h2>Книг: {totalUniqueItems}</h2>
        <h2> Количество экземпляров: {totalItems}</h2>
        <h2>Общая сумма : {cartTotal} </h2>
        <Box style={{ display: "flex", marginTop: "30px" }}>
          <Button
            onClick={() => navigate("/payment")}
            variant="contained"
            endIcon={<SendIcon />}
            style={{ marginRight: "15px" }}
          >
            Купить сейчас
          </Button>
          <Button
            onClick={() => emptyCart()}
            variant="outlined"
            startIcon={<DeleteIcon />}
          >
            Очистить корзину{" "}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Cart;
