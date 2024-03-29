import React, { useEffect, useState } from "react";
import fire from "../fire";

export const authContext = React.createContext();

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");
  const [error, setError] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  function signUp(email, password, navigate) {
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => navigate("/login"))
      .catch((err) => setError(err.message));
  }
  function login(email, password, navigate) {
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => navigate("/books"))
      .catch((err) => setError(err.message));
  }
  // function signInWithGoogle() {
  //   fire.auth().signInWithGoogle();
  // }
  function logOut() {
    fire.auth().signOut();
  }
  function authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        // admin@mail.ru password 123456
        if (user.email === "admin@mail.ru") {
          setIsAdmin(true);
        }
        setCurrentUser(user);
      } else {
        setCurrentUser("");
        setIsAdmin(false);
      }
    });
  }
  useEffect(authListener, []);
  function forgotPassword(email, navigate) {
    fire
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => navigate("/login"))
      .catch((err) => setError(err.message));
  }

  return (
    <authContext.Provider
      value={{
        currentUser,
        error,
        isAdmin,
        signUp,
        login,
        logOut,
        forgotPassword,
        // signInWithGoogle,
      }}
    >
      {children}
    </authContext.Provider>
  );
};
export default AuthContextProvider;
