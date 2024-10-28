import React, { useState, useCallback, createContext, useContext } from "react";

interface ModalContextProps {
  message: string | null;
  handleAction: () => void;
  showModal: (msg: string, action: () => void) => void;
}

const ModalContext = createContext<ModalContextProps>({} as ModalContextProps);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [message, setMessage] = useState<string | null>(null);
  const [handleAction, setHandleAction] = useState<() => void | null>(() => {});

  const showModal = useCallback((msg: string, action: () => void) => {
    setMessage(msg);
    setHandleAction(action);
  }, []);

  return (
    <ModalContext.Provider value={{ message, handleAction, showModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
