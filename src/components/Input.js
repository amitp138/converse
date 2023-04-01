import React from "react";
import { MdOutlineAttachFile } from "react-icons/md";
import { BiImageAdd } from "react-icons/bi";
const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="write message..." />
      <div className="send">
        <MdOutlineAttachFile className="doc" />
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <BiImageAdd className="doc" />
        </label>
        <button>send</button>
      </div>
    </div>
  );
};

export default Input;
