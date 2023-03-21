import React from "react";
import cam from "../Images/cam.png";
import add from "../Images/add.png";
import more from "../Images/more.png";

const Chat = () => {
  return (
    <div className="Chat">
      <div className="ChatInfo">
        <span>Suyash</span>
        <div className="ChatIcons">
          <img src={cam} alt="" />
          <img src={add} alt="" />
          <img src={more} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Chat;
