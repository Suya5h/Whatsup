import React from "react";
import img from "../Images/img.png";
import Attach from "../Images/attach.png";

const Input = () => {
  return (
    <div className="Input">
      <input type="text" placeholder="Type something..." />
      <div className="send">
        <img src={Attach} alt="" />
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <img src={img} alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Input;
