import React, { useContext } from "react";
import Suyash from "../Images/Suyash.jpg";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../Context/AuthContext";

const NavBar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="NavBar">
      <span className="Logo"> Whatsup</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>Logout</button>
      </div>
    </div>
  );
};

export default NavBar;
