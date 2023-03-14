import React from "react";
import Add from "../Images/addAvatar.png";

const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="Logo">Our Chat</span>
        <span className="Title">Register</span>
        <form>
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input style={{ display: " none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Upload you avatar</span>
          </label>
          <button>Sign up</button>
        </form>
        <p>Already have an account! LOGIN</p>
      </div>
    </div>
  );
};

export default Register;
