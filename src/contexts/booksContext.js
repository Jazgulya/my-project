import axios from "axios";
import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";

export const booksContext = React.createContext();

const API = "http://localhost:8000/books";

const INIT_STATE = {
  books: [],
  oneBook: null,
  pages: 0,
};
function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_BOOKS":
      return {
        ...state,
        books: action.payload.data,
        pages: Math.ceil(action.payload.headers["x-total-count"] / 6),
      };
    case "FILTER_BOOKS":
      return {
        ...state,
        books: action.payload.data,
      };

    case "GET_ONE_BOOK":
      return { ...state, oneBook: action.payload };
    default:
      return state;
  }
}

const BooksContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const navigate = useNavigate();
  async function createBook(newBook) {
    await axios.post(API, newBook);
  }

  async function getBooks() {
    let res = await axios(`${API}/${window.location.search}`);
    dispatch({
      type: "GET_BOOKS",
      payload: res,
    });
    console.log(res);
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
  async function updateBook(id, editedBook) {
    await axios.patch(`${API}/${id}`, editedBook);
  }

  const filterByTag = (tag, value) => {
    const search = new URLSearchParams(window.location.search);
    if (value === "all") {
      search.delete(tag);
    } else {
      search.set(tag, value);
    }

    const url = `${window.location.pathname}?${search.toString()}`;
    navigate(url);
  };

  return (
    <booksContext.Provider
      value={{
        books: state.books,
        oneBook: state.oneBook,
        pages: state.pages,
        createBook,
        getBooks,
        deleteBook,
        getOneBook,
        updateBook,
        filterByTag,
      }}
    >
      {" "}
      {children}
    </booksContext.Provider>
  );
};
export default BooksContextProvider;
