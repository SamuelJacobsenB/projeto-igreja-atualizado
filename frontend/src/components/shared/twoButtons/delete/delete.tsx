"use client";

import React from "react";
import { useModal } from "@/contexts/modal.context";
import I from "@/components/icons/icons";
import "./styles.scss";

interface DeleteBtnProps {
  onClick: () => Promise<void>;
}

const DeleteBtn: React.FC<DeleteBtnProps> = ({ onClick }: DeleteBtnProps) => {
  const { showModal } = useModal();

  return (
    <button
      className="btn_delete_area"
      onClick={() =>
        showModal(
          "Você tem total certeza de que quer excluir este item? ( esta ação é permanente )",
          onClick
        )
      }
    >
      <I.Trash /> <p>Deletar</p>
    </button>
  );
};

export default DeleteBtn;
