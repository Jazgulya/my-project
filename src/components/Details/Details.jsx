import React, { useContext, useEffect, useState } from "react";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import { booksContext } from "../../contexts/booksContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Box, Button, Container } from "@mui/material";
import CommentsList from "../Comments/CommentsList";
import CommentAdd from "../Comments/CommentAdd";
import { commentsContext } from "../../contexts/commentsContext";
import { authContext } from "../../contexts/authContext";
import ShareModal from "../ShareModal/ShareModal";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TelegramShareButton,
  TelegramIcon,
  OKShareButton,
  OKIcon,
} from "react-share";
import { favContext } from "../../contexts/favContext";
import { useCart } from "react-use-cart";
import Carousel from "react-carousel";
import { Card } from "@material-ui/core";
import Recommendations from "../Recommendations/Recommendations";

const Details = () => {
  const shareUrl = "https://yandex.ru/"; //for share
  const navigate = useNavigate();
  // Modal
  const [active, setActive] = useState(false);
  const { currentUser } = useContext(authContext);
  const { getOneBook, oneBook, books, getBooks } = useContext(booksContext);
  const { addBookToFav, checkBookInFav } = React.useContext(favContext);
  const { createComment, comments, getComments, deleteComment, updateComment } =
    useContext(commentsContext);

  const { addItem } = useCart();
  const [commentEdit, setCommentEdit] = useState(false);
  const [checkBook, setCheckBook] = React.useState(checkBookInFav(oneBook));
  const { bookId } = useParams();

  React.useEffect(() => {
    getBooks();
  }, []);
  // console.log(books);

  React.useEffect(() => {
    getOneBook(bookId);
  }, []);
  // console.log(oneBook);
  React.useEffect(() => {
    getComments();
  }, []);

  if (!oneBook) {
    return <h5>Loading</h5>;
  }

  return (
    <Container>
      <Box
        display={"flex"}
        flexDirection={{ xs: "column", md: "row", lg: "row" }}
        marginTop={"10px"}
      >
        <Box width={"50vw"}>
          <img
            style={{
              objectFit: "contain",
              width: "80%",
            }}
            alt="Фото книги"
            src={oneBook.photo}
          />{" "}
        </Box>
        <Box
          // border={"1px solid black"}
          display={"flex"}
          flexDirection={"column"}
          width={{ md: "70vw", lg: "50vw" }}
        >
          <Typography variant="h6"> О книге:</Typography>
          <Typography textAlign={"center"} variant="h6">
            {oneBook.title}
          </Typography>
          <Typography textAlign={"center"} variant="h6">
            {oneBook.author}
          </Typography>
          <Typography variant="h6">Характеристики:</Typography>
          <Typography
            textAlign={"center"}
            variant="body2"
            color="text.secondary"
          >
            Раздел: {oneBook.chapter}
          </Typography>
          <Typography
            textAlign={"center"}
            variant="body2"
            color="text.secondary"
          >
            {oneBook.year} года выпуска
          </Typography>
          <Typography
            textAlign={"center"}
            variant="body2"
            color="text.secondary"
          >
            Стоимость: {oneBook.price} сом
          </Typography>

          <Typography variant="h6">Описание:</Typography>
          <Typography
            textAlign={"center"}
            variant="body2"
            color="text.secondary"
          >
            {oneBook.description}
          </Typography>
          <Button
            style={{ marginTop: "15px" }}
            variant="outlined"
            onClick={() => navigate("/chat")}
          >
            Обсудить книгу онлайн
          </Button>
          <Box display={"flex"} marginTop={"15px"}>
            <Button
              onClick={() => {
                addBookToFav(oneBook);
                setCheckBook(checkBookInFav(oneBook));
              }}
            >
              <BookmarkBorderIcon color={checkBook ? "warning" : "primary"} />
            </Button>
            <IconButton onClick={() => setActive(true)} aria-label="share">
              <ShareIcon />
            </IconButton>
            <Button
              style={{ marginLeft: "10px" }}
              onClick={() => addItem(oneBook)}
              variant="contained"
              color="primary"
            >
              Добавить в корзину
            </Button>
            <ShareModal active={active} setActive={setActive}>
              <FacebookShareButton
                url={shareUrl}
                quote={"Title"}
                hashtag={"#portfolio..."}
              >
                <FacebookIcon round={true} size={40} />
              </FacebookShareButton>
              <WhatsappShareButton
                style={{ marginLeft: "10px" }}
                url={shareUrl}
                quote={"Title"}
                hashtag={"#portfolio..."}
              >
                <WhatsappIcon round={true} size={40} />
              </WhatsappShareButton>
              <TelegramShareButton
                style={{ marginLeft: "10px" }}
                url={shareUrl}
                quote={"Title"}
                hashtag={"#portfolio..."}
              >
                <TelegramIcon round={true} size={40} />
              </TelegramShareButton>
              <OKShareButton
                style={{ marginLeft: "10px" }}
                url={shareUrl}
                quote={"Title"}
                hashtag={"#portfolio..."}
              >
                <OKIcon round={true} size={40} />
              </OKShareButton>
            </ShareModal>
          </Box>
          {currentUser ? (
            <CommentAdd
              currentUser={currentUser}
              getComments={getComments}
              commentEdit={commentEdit}
              setCommentEdit={setCommentEdit}
              updateComment={updateComment}
              bookId={bookId}
              createComment={createComment}
            />
          ) : (
            <Typography style={{ margin: "15px 0" }} variant="h6">
              Если хотите оставить отзыв, необходимо{" "}
              <Link to="/login"> войти </Link>
            </Typography>
          )}
          <CommentsList
            setCommentEdit={setCommentEdit}
            bookId={bookId}
            comments={comments}
            deleteComment={deleteComment}
          />
          <Box width={"30%"}>
            <Typography textAlign={"center"} variant="h6">
              Рекомендации
            </Typography>

            {books?.map((item) =>
              item.chapter == oneBook.chapter ? (
                <Recommendations key={item.id} item={item} />
              ) : null
            )}
          </Box>
        </Box>
      </Box>
    </Container>
  );
  //   card, other photos about book in carousel, description, field for the quantity on the page, you may also like, comments, share, rating, like, to add to cart,
};

export default Details;
