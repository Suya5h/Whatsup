import React from "react";
import Add from "../Images/addAvatar.png";

const LOGIN = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="Logo">Our Chat</span>
        <span className="Title">LOGIN</span>
        <form>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>Sign in</button>
        </form>
        <p>You don't have an account! Register</p>
      </div>
    </div>
  );
};

export default LOGIN;
