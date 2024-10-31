"use client";

import React from "react";
import { useModal } from "@/contexts/modal.context";
import "./styles.scss";

const Modal: React.FC = () => {
  const { message, closeModal, executeAction } = useModal();

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
