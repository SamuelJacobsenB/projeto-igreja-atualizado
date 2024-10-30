import React from "react";
import I from "@/components/icons/icons";
import "./styles.scss";

interface DeleteBtnProps {
  onClick: () => void;
}

const DeleteBtn: React.FC<DeleteBtnProps> = ({ onClick }: DeleteBtnProps) => {
  return (
    <button className="btn_delete_area" onClick={onClick}>
      <I.Trash /> <p>Deletar</p>
    </button>
  );
};

export default DeleteBtn;
