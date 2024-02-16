import React from "react";
import Profile from "./profile.jpg";

function Searchbar() {
  return (
    <div className="grid-container">
      <div className="grid-item item1">
        <b>
          <b className="bi bi-chevron-left arrow1"></b>
        </b>
        <b>
          <b className="bi bi-chevron-right arrow2"></b>
        </b>
      </div>
      <div className="grid-item item2">
        <b className="bi bi-search searchicon"></b>
        <input
          type="search"
          className="search"
          placeholder="Searches for skills, peers and organisations"
        ></input>
      </div>
      <div className="grid-item item3">
        <b>
          <i className="bi bi-envelope enve"></i>
          <i className="bi bi-bell bel"></i>
          <img
            src={Profile}
            className="pic"
            alt="profilepic"
            width="32px"
            height="32px"
          ></img>
        </b>
      </div>
    </div>
  );
}
export default Searchbar;
