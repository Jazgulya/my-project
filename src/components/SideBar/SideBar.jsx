import React from "react";
import Filters from "../Filters/Filters";
import "./SideBar.css";

const SideBar = ({ setFilter }) => {
  return (
    <div className="sidebar">
      <Filters />
    </div>
  );
};

export default SideBar;
