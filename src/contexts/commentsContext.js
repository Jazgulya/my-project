import React, { useReducer } from "react";
import axios from "axios";

const API = "http://localhost:8000/comments";
export const commentsContext = React.createContext();

const INIT_STATE = {
  comments: [],
  oneComment: null,
};
function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_COMMENTS":
      return { ...state, comments: action.payload.data };
    default:
      return state;
  }
}

const CommentsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  async function createComment(newComment) {
    await axios.post(API, newComment);
    getComments();
  }

  async function getComments() {
    let res = await axios(API);
    dispatch({
      type: "GET_COMMENTS",
      payload: res,
    });
  }
  async function deleteComment(id) {
    await axios.delete(`${API}/${id}`);
    getComments();
  }

  async function updateComment(id, editedComment) {
    await axios.patch(`${API}/${id}`, editedComment);
  }
  return (
    <commentsContext.Provider
      value={{
        comments: state.comments,
        oneComment: state.oneComment,
        createComment,
        getComments,
        deleteComment,
        updateComment,
      }}
    >
      {" "}
      {children}
    </commentsContext.Provider>
  );
};
export default CommentsContextProvider;
