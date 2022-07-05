import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  createMuiTheme,
  MuiThemeProvider,
  responsiveFontSizes,
  Typography,
} from "@material-ui/core";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </React.StrictMode>
);
