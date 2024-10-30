import React from "react";
import I from "@/components/icons/icons";

interface DeleteBtnProps {
  onClick: () => void;
}

const DeleteBtn: React.FC<DeleteBtnProps> = ({ onClick }: DeleteBtnProps) => {
  return (
    <button className="btn_delete_area" onClick={onClick}>
      <I.Trash />
    </button>
  );
};

export default DeleteBtn;
