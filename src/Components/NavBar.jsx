import React from "react";
import Suyash from "../Images/Suyash.jpg";

const NavBar = () => {
  return (
    <div className="NavBar">
      <span className="Logo"> Whatsup</span>
      <div className="user">
        <img src={Suyash} alt="" />
        <span>Suyash</span>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default NavBar;
