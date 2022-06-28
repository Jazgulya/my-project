import fire from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAK5Ts5AvHO6HJ8g65t7jmYiKDLSLfzsdE",
  authDomain: "auth-jazgul.firebaseapp.com",
  projectId: "auth-jazgul",
  storageBucket: "auth-jazgul.appspot.com",
  messagingSenderId: "249197901103",
  appId: "1:249197901103:web:020b74f270b8da86bc9dda",
};
export default fire.initializeApp(firebaseConfig);
