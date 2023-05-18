import React from "react";
import Suyash from "../Images/Suyash.jpg";

const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img src={Suyash} alt="" />
        <span>Just Now</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
        <img src={Suyash} alt="" />
      </div>
    </div>
  );
};

export default Message;
