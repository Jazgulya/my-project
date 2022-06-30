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
    case "GET_ONE_COMMENT":
      return { ...state, comment: action.payload };
    default:
      return state;
  }
}

const CommentsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  async function createComment(newComment) {
    await axios.post(API, newComment);
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
  async function getOneComment(id) {
    let res = await axios(`${API}/${id}`);
    dispatch({
      type: "GET_ONE_COMMENT",
      payload: res.data,
    });
  }
  return (
    <commentsContext.Provider
      value={{
        comments: state.comments,
        oneComment: state.oneComment,
        createComment,
        getComments,
        deleteComment,
        getOneComment,
      }}
    >
      {" "}
      {children}
    </commentsContext.Provider>
  );
};
export default CommentsContextProvider;
