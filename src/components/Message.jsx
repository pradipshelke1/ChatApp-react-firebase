import React, { useContext, useEffect, useRef } from "react";
// import "../style.scss"
// import { AuthContext } from "../context/AuthContext";
// import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
  // const { currentUser } = useContext(AuthContext);
  // const { data } = useContext(ChatContext);

  // const ref = useRef();

  // useEffect(() => {
  //   ref.current?.scrollIntoView({ behavior: "smooth" });
  // }, [message]);

  return (
    // <div
    //   ref={ref}
    //   className={`message ${message.senderId === currentUser.uid && "owner"}`}
    // >
    //   <div className="messageInfo">
    //     <img
    //       src={
    //         message.senderId === currentUser.uid
    //           ? currentUser.photoURL
    //           : data.user.photoURL
    //       }
    //       alt=""
    //     />
    //     <span>just now</span>
    //   </div>
    //   <div className="messageContent">
    //     <p>{message.text}</p>
    //     {message.img && <img src={message.img} alt="" />}
    //   </div>
    // </div>
    <div className="message owner">
      <div className="messageInfo">
        <img src="https://images.pexels.com/photos/16407235/pexels-photo-16407235.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        <img src="https://images.pexels.com/photos/16407235/pexels-photo-16407235.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>
      </div>
    </div>
  );
};

export default Message;