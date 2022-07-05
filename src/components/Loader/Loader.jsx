import { CircularProgress } from "@mui/material";
import React from "react";

const Loader = () => {
  return (
    <div>
      <CircularProgress color="secondary" />
      <CircularProgress color="success" />
      <CircularProgress color="inherit" />
    </div>
  );
};

export default Loader;
