import React, { useState, useCallback, createContext, useContext } from "react";

interface ModalContextProps {
  message: string | null;
  handleAction: () => Promise<void>;
  showModal: (msg: string, action: () => Promise<void>) => void;
  closeModal: () => void;
  executeAction: () => void;
}

const ModalContext = createContext<ModalContextProps>({} as ModalContextProps);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [message, setMessage] = useState<string | null>(null);
  const [handleAction, setHandleAction] = useState<() => Promise<void>>(
    async () => {}
  );

  const showModal = useCallback((msg: string, action: () => Promise<void>) => {
    setMessage(msg);
    setHandleAction(() => action);
  }, []);

  const closeModal = useCallback(() => {
    setMessage(null);
    setHandleAction(async () => {});
  }, []);

  const executeAction = useCallback(async () => {
    await handleAction();
    closeModal();
  }, [handleAction, closeModal]);

  return (
    <ModalContext.Provider
      value={{ message, handleAction, showModal, closeModal, executeAction }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
