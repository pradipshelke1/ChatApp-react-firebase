import React, { useContext } from "react";
// import Cam from "../img/cam.png";
// import Add from "../img/add.png";
// import More from "../img/more.png";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { FaUserPlus } from "react-icons/fa";
import { MdMoreHoriz } from "react-icons/md";

import Message from "./Message";
import Input from "./Input";
import Messages from "./Messages";
// import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  // const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        {/* <span>{data.user?.displayName}</span> */}
        <span>Pradip</span>

        <div className="chatIcons">
          <BsFillCameraVideoFill />
          <FaUserPlus />
          <MdMoreHoriz />
          {/* <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" /> */}
        </div>
      </div>
      <Messages/>
      <Input />
    </div>
  );
};

export default Chat;
