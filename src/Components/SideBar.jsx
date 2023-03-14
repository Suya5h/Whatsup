import React from "react";
import NavBar from "./NavBar";
import Search from "./Search";
import Chats from "./Chats";

const SideBar = () => {
  return (
    <div className="SideBar">
      <NavBar />
      <Search />
      <Chats />
    </div>
  );
};

export default SideBar;
