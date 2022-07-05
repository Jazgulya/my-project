import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { favContext } from "../../contexts/favContext";
import { useNavigate } from "react-router-dom";
import { Box, IconButton, Container } from "@mui/material";
import { MdDelete } from "react-icons/md";
import { useCart } from "react-use-cart";
import { Grid } from "@material-ui/core";

export default function Favourites() {
  const { getFav, fav, deleteFromFav } = React.useContext(favContext);
  const { addItem } = useCart();
  React.useEffect(() => {
    getFav();
  }, []);
  const navigate = useNavigate();
  //   if (fav.books < 1) {
  //     return <h2>Список пуст</h2>;
  //   }
  // console.log(fav.books);
  return (
    <Container>
      {" "}
      <Typography
        style={{ marginTop: "20px" }}
        textAlign={"center"}
        variant="h5"
      >
        {" "}
        Список избранных книг
      </Typography>
      <Box style={{ display: "flex", flexWrap: "wrap" }}>
        {fav &&
          fav?.books.map((book) => (
            <Grid spacing={3} xs={10} sm={6} md={4}>
              <Card style={{ margin: "10px" }}>
                <Box>
                  <img
                    alt="photo book"
                    style={{
                      width: "100%",
                      height: "21rem",
                      objectFit: "contain",
                    }}
                    src={book.item.photo}
                  />
                </Box>
                <CardContent>
                  <Typography
                    className="card-title"
                    gutterBottom
                    variant="h5"
                    component="div"
                    fontSize={"25px"}
                    textAlign={"center"}
                  >
                    {book.item.title}
                  </Typography>
                  <Typography
                    textAlign={"center"}
                    variant="h6"
                    color="text.primary"
                  >
                    {book.item.author}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {book.item.chapter}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {book.item.year}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {book.item.price}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Box display="flex" justifyContent={"center"}>
                    <Button
                      onClick={() => addItem(book.item)}
                      variant="contained"
                      color="success"
                    >
                      Добавить в корзину
                    </Button>
                  </Box>
                  <IconButton
                    onClick={() => deleteFromFav(book.item.id)}
                    aria-label="delete"
                  >
                    <MdDelete />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
      </Box>
    </Container>
  );
}
