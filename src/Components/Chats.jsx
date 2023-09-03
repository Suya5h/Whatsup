import React, { useContext, useEffect, useState } from "react";
import Suyash from "../Images/Suyash.jpg";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../Context/AuthContext";

const chats = () => {
  const [chats, setChats] = useState([]);

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userchats", currentUser.uid), (doc) => {
        if (doc.exists()) {
          setChats(doc.data());
        } else {
          // Handle the case where the document doesn't exist
          console.log("Document does not exist");
        }
      });

      unsub(); // Unsubscribe immediately after the first snapshot

      return () => {
        unsub(); // Cleanup the subscription when the component unmounts
      };
    };

    if (currentUser && currentUser.uid) {
      getChats();
    }
  }, [currentUser]);

  console.log(Object.entries(chats));
  return (
    <div className="chats">
      {Object.entries(chats)?.map((chat) => (
        <div className="userchats" key={chat[0]}>
          <img src={Chat[1].userInfo.photoURL} alt="" />
          <div className="userchatsInfo">
            <span>{chat[1].userInfo.displayName}</span>
            <p>{chat[1].userInfo.lastMessage?.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default chats;
