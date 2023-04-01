import React, { useContext } from "react";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FiMoreVertical } from "react-icons/fi";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <BsFillCameraVideoFill className="icon" />
          <AiOutlineUserAdd className="icon" />
          <FiMoreVertical className="icon" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
