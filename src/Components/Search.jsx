import React from "react";
import Suyash from "../Images/Suyash.jpg";

const Search = () => {
  return (
    <div className="Search">
      <div className="searchForm">
        <input type="text" placeholder="Search the user" />
      </div>
      <div className="userChat">
        <img src={Suyash} alt="" />
        <div className="userCharInfo">
          <span>Suyash</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
