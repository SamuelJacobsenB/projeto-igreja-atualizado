"use client";

import React, { useState, useCallback, createContext, useContext } from "react";
import { Type } from "@/types/type";

interface MessageContextProps {
  message: string | null;
  type: Type | null;
  showMessage: (msg: string, type: Type) => void;
}

const defaultContext: MessageContextProps = {
  message: null,
  type: null,
  showMessage: () => {},
};

const MessageContext = createContext<MessageContextProps>(defaultContext);

export const MessageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [message, setMessage] = useState<string | null>(null);
  const [type, setType] = useState<Type | null>(null);

  const showMessage = useCallback((msg: string, type: Type) => {
    setMessage(msg);
    setType(type);

    setTimeout(() => {
      setMessage(null), setType(null);
    }, 6000);
  }, []);

  return (
    <MessageContext.Provider value={{ message, type, showMessage }}>
      {children}
    </MessageContext.Provider>
  );
};

export const useMessage = () => useContext(MessageContext);
