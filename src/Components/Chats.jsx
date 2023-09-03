import React from "react";
import Suyash from "../Images/Suyash.jpg";

const chats = () => {
  return (
    <div className="chats">
      <div className="userchats">
        <img src={Suyash} alt="" />
        <div className="userchatsInfo">
          <span>Suyash</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userchats">
        <img src={Suyash} alt="" />
        <div className="userchatsInfo">
          <span>Suyash</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userchats">
        <img src={Suyash} alt="" />
        <div className="userchatsInfo">
          <span>Suyash</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  );
};

export default chats;
