import React, { useState } from "react";
import Suyash from "../Images/Suyash.jpg";
import { collection, query, where } from "firebase/firestore";
import { db } from "../firebase";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const handleSearch = () => {
    const q = query(collection(db, "users"), where);
  };

  const handleKey = (e) => {
    e.code == "Enter" && handleSearch();
  };
  return (
    <div className="Search">
      <div className="searchForm">
        <input
          type="text"
          placeholder="Search for user"
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
        />
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
