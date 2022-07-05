import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { MdDelete } from "react-icons/md";
import { booksContext } from "../../contexts/booksContext";
import { TbListDetails, TbTypography } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import { Box, Button } from "@mui/material";
import { useCart } from "react-use-cart";
import "./BooksCard.css";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { favContext } from "../../contexts/favContext";
import { authContext } from "../../contexts/authContext";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import { Grid } from "@material-ui/core";

export default function BooksCard({ item }) {
  const { addBookToFav, checkBookInFav } = React.useContext(favContext);
  const { isAdmin } = React.useContext(authContext);
  const { addItem } = useCart();
  const { deleteBook } = React.useContext(booksContext);
  const navigate = useNavigate();
  const [checkBook, setCheckBook] = React.useState(checkBookInFav(item));

  return (
    <Grid item spacing={3} xs={10} sm={6} md={4}>
      <Card sx={{ width: 300 }} style={{ margin: "15px" }}>
        <img
          src={item.photo}
          alt="photo book"
          style={{ width: "100%", height: "21rem", objectFit: "contain" }}
        />
        <Box>
          <CardContent>
            <Typography
              className="card-title"
              textAlign={"center"}
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "18px", sm: "22px", md: "22px", lg: "25px" },
              }}
            >
              {item.title}
            </Typography>
            <Typography
              textAlign="center"
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "18px", sm: "22px", md: "22px", lg: "25px" },
              }}
              color="text.primary"
            >
              {item.author}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Раздел: {item.chapter}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Год выпуска: {item.year} год
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Стоимость: {item.price} cом
            </Typography>
          </CardContent>
          <CardActions style={{ height: "20%" }}>
            <IconButton
              onClick={() => navigate(`/books/${item.id}`)}
              aria-label="details"
            >
              <FormatAlignCenterIcon />
            </IconButton>
            <Button
              onClick={() => {
                addBookToFav(item);
                setCheckBook(checkBookInFav(item));
              }}
            >
              <BookmarkBorderIcon color={checkBook ? "warning" : "primary"} />
            </Button>
            {isAdmin ? (
              <>
                <IconButton onClick={() => navigate(`/edit/${item.id}`)}>
                  <EditIcon />
                </IconButton>
                <IconButton
                  onClick={() => deleteBook(item.id)}
                  aria-label="delete"
                >
                  <MdDelete />
                </IconButton>
              </>
            ) : null}
          </CardActions>
        </Box>
        <Box display="flex" justifyContent={"center"} marginBottom={"10px"}>
          <Button
            onClick={() => addItem(item)}
            variant="contained"
            color="success"
          >
            Добавить в корзину
          </Button>
        </Box>
      </Card>
    </Grid>
  );
}
