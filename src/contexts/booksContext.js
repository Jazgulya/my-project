import axios from "axios";
import React, { useReducer } from "react";

export const booksContext = React.createContext();

const API = "http://localhost:8000/books";

const INIT_STATE = {
  books: [],
  oneBook: null,
};
function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_BOOKS":
      return { ...state, books: action.payload.data };
    case "GET_ONE_BOOK":
      return { ...state, oneBook: action.payload };
    default:
      return state;
  }
}

const BooksContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  async function createBook(newBook) {
    await axios.post(API, newBook);
  }

  async function getBooks() {
    let res = await axios(API);
    dispatch({
      type: "GET_BOOKS",
      payload: res,
    });
  }
  async function deleteBook(id) {
    await axios.delete(`${API}/${id}`);
    getBooks();
  }
  async function getOneBook(id) {
    let res = await axios(`${API}/${id}`);
    dispatch({
      type: "GET_ONE_BOOK",
      payload: res.data,
    });
  }

  // async function createComment(id, newComment) {
  //   const res = axios.patch(`${API}/${id}`, newComment);
  //   console.log(res);
  // }
  return (
    <booksContext.Provider
      value={{
        books: state.books,
        oneBook: state.oneBook,
        createBook,
        getBooks,
        deleteBook,
        getOneBook,
      }}
    >
      {" "}
      {children}
    </booksContext.Provider>
  );
};
export default BooksContextProvider;
