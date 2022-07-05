import React, { useReducer } from "react";

export const favContext = React.createContext();

const INIT_STATE = {
  fav: null,
  count: 0,
};
function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_FAV":
      return {
        ...state,
        fav: action.payload,
        count: action.payload.books.length,
      };
    default:
      return state;
  }
}

const FavContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  function addBookToFav(book) {
    let fav = JSON.parse(localStorage.getItem("fav"));
    if (!fav) {
      fav = {
        books: [],
        totalPrice: 0,
      };
    }
    let newBook = {
      item: book,
      count: 1,
      subPrice: book.price,
    };
    let isBookInFav = fav.books.some((item) => item.item.id === book.id);
    // console.log(isBookInFav);
    if (isBookInFav) {
      fav.books = fav.books.filter((item) => item.item.id !== book.id);
    } else {
      fav.books.push(newBook);
    }

    localStorage.setItem("fav", JSON.stringify(fav));
    // console.log(fav);
    // console.log(book);
    getFav();
  }
  function checkBookInFav(book) {
    let fav = JSON.parse(localStorage.getItem("fav"));
    if (!fav) {
      fav = {
        books: [],
        totalPrice: 0,
      };
    }
    let isBookInFav = fav.books.some((item) => item.item.id === book?.id);
    return isBookInFav;
  }

  function getFav() {
    let fav = JSON.parse(localStorage.getItem("fav"));
    if (!fav) {
      fav = {
        books: [],
        totalPrice: 0,
      };
    }
    // cart.totalPrice = cart.products.reduce((prev, curr) => {
    //   return prev + curr.subPrice;
    // }, 0);

    dispatch({
      type: "GET_FAV",
      payload: fav,
    });
  }
  //   function changeProductCount(count, id) {
  //     if (count <= 0) {
  //       count = 1;
  //     }
  //     let cart = JSON.parse(localStorage.getItem("cart"));
  //     cart.products = cart.products.map(item => {
  //       if (item.item.id === id) {
  //         item.count = count;
  //         item.subPrice = item.count * item.item.price;
  //       }
  //       return item;
  //     });
  //     localStorage.setItem("cart", JSON.stringify(cart));
  //     getCart();
  //   }
  function deleteFromFav(id) {
    let fav = JSON.parse(localStorage.getItem("fav"));
    fav.books = fav.books.filter((item) => item.item.id !== id);
    localStorage.setItem("fav", JSON.stringify(fav));
    getFav();
  }
  return (
    <favContext.Provider
      value={{
        fav: state.fav,
        count: state.count,
        addBookToFav,
        checkBookInFav,
        getFav,
        // changeProductCount,
        deleteFromFav,
      }}
    >
      {children}
    </favContext.Provider>
  );
};
export default FavContextProvider;
