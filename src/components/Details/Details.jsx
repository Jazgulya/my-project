import React, { useContext, useEffect } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { booksContext } from "../../contexts/booksContext";
import { useParams } from "react-router-dom";
import { Box, Container } from "@mui/material";
import CommentsList from "../Comments/CommentsList";
import CommentsEdit from "../Comments/CommentsEdit";
import CommentAdd from "../Comments/CommentAdd";
import { commentsContext } from "../../contexts/commentsContext";
import { authContext } from "../../contexts/authContext";

const Details = () => {
  const { currentUser } = useContext(authContext);
  const { getOneBook, oneBook } = useContext(booksContext);
  const { createComment, comments, getComments, deleteComment } =
    useContext(commentsContext);
  const { bookId } = useParams();
  React.useEffect(() => {
    getComments();
  });
  React.useEffect(() => {
    getOneBook(bookId);
  }, []);
  // useEffect(() => {
  //   getComments();
  // }, []);
  if (!oneBook) {
    return <h5>Loading</h5>;
  }
  return (
    <Container>
      <Card style={{ margin: "30px" }} sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={oneBook.title}
          subheader={`год выпуска: ${oneBook.year}`}
        />
        <CardMedia
          style={{ objectFit: "contain" }}
          component="img"
          height="194"
          image={oneBook.photo}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {oneBook.chapter}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {oneBook.year}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {oneBook.price}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
      <Box>
        <CommentsList
          comments={comments}
          getComments={getComments}
          currentUser={currentUser}
          deleteComment={deleteComment}
        />
      </Box>
      <Box>
        <CommentAdd bookId={bookId} createComment={createComment} />
      </Box>

      {/* <CommentsEdit bookId={bookId} /> */}
    </Container>
  );
  //   card, other photos about book in carousel, description, field for the quantity on the page, you may also like, comments, share, rating, like, to add to cart,
};

export default Details;

// осталась верстка Details, убрать связь с back-end login register так как мы не будем связывать на финальном проекте,
