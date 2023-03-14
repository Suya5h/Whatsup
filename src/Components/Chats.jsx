import React from "react";
import Suyash from "../Images/Suyash.jpg";

const Chats = () => {
  return (
    <div className="Chats">
      <div className="userChat">
        <img src={Suyash} alt="" />
        <div className="userCharInfo">
          <span>Suyash</span>
        </div>
      </div>
    </div>
  );
};

export default Chats;
