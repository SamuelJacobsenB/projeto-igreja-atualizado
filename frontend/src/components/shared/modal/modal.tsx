"use client";

import React from "react";
import { useModal } from "@/contexts/modal.context";
import { useMessage } from "@/contexts/message.context";
import "./styles.scss";

const Modal: React.FC = () => {
  const { message, handleAction, closeModal } = useModal();
  const { showMessage } = useMessage();

  const executeAction = async () => {
    await handleAction()
      .then(() => {
        closeModal();
      })
      .catch(() => {
        showMessage("Houve um erro, tente novamente", "error");
      });
  };

  if (!message) {
    return null;
  }

  if (message)
    return (
      <div className="modal_area">
        <div className="modal">
          <h1>Nova ação:</h1>
          <p>{message}</p>
          <div className="btn_area">
            <button onClick={closeModal} className="cancel">
              Cancelar
            </button>
            <button
              onClick={async () => await executeAction()}
              className="confirm"
            >
              Confirmar
            </button>
          </div>
        </div>
      </div>
    );
};

export default Modal;
