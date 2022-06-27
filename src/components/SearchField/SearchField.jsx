import React from "react";
import "./SearchField.scss";

const SearchField = ({ search, setSearch }) => {
  //   input.addEventListener("focus", () => {
  //     finder.classList.add("active");
  //   });

  //   input.addEventListener("blur", () => {
  //     if (input.value.length === 0) {
  //       finder.classList.remove("active");
  //     }
  //   });

  //   form.addEventListener("submit", (ev) => {
  //     ev.preventDefault();
  //     finder.classList.add("processing");
  //     finder.classList.remove("active");
  //     input.disabled = true;
  //     setTimeout(() => {
  //       finder.classList.remove("processing");
  //       input.disabled = false;
  //       if (input.value.length > 0) {
  //         finder.classList.add("active");
  //       }
  //     }, 1000);
  //   });

  return (
    <div className="container">
      <form autocomplete="off">
        <div className="finder">
          <div className="finder__outer">
            <div className="finder__inner">
              <div className="finder__icon" createRef="icon"></div>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="finder__input"
                type="text"
                name="q"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchField;
