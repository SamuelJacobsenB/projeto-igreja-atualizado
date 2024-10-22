"use client";

import React from "react";
import { useMessage } from "@/contexts/message.context";
import "./styles.scss";

const Message: React.FC = () => {
  const { message, type } = useMessage();

  if (!message) {
    return null;
  }

  return (
    <div className={`message ${type}`}>
      <p>{message}</p>
      <div></div>
    </div>
  );
};

export default Message;
