import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { MdDelete } from "react-icons/md";
import { booksContext } from "../../contexts/booksContext";
import { TbListDetails } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import { Box, Button } from "@mui/material";
import { useCart } from "react-use-cart";
import "./BooksCard.css";

export default function BooksCard({ item }) {
  const { addItem } = useCart();
  const { deleteBook } = React.useContext(booksContext);
  const navigate = useNavigate();

  return (
    <Card sx={{ maxWidth: 300 }} style={{ margin: "20px" }}>
      <img
        style={{ width: "100%", height: "21rem", objectFit: "contain" }}
        src={item.photo}
      />
      <CardContent>
        <Typography
          className="card-title"
          gutterBottom
          variant="h5"
          component="div"
          fontSize={"25px"}
          textAlign={"center"}
        >
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.chapter}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.year}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.price}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton onClick={() => navigate(`/edit/${item.id}`)}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => deleteBook(item.id)} aria-label="delete">
          <MdDelete />
        </IconButton>
        <IconButton
          onClick={() => navigate(`/books/${item.id}`)}
          aria-label="details"
        >
          <TbListDetails />
        </IconButton>
        <Box display="flex" justifyContent={"center"}>
          <Button
            onClick={() => addItem(item)}
            variant="contained"
            color="success"
          >
            Добавить в корзину
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
}
