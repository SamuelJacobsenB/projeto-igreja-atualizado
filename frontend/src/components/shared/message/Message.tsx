import React from "react";
import "./styles.scss";

interface MessageProps {
  message: string;
  type: "success" | "error";
}

const Message = ({ message, type }: MessageProps) => {
  return (
    <div className={`message ${type}`}>
      <p>{message}</p>
      <div></div>
    </div>
  );
};

export default Message;
