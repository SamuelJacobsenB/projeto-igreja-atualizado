import React from "react";
import I from "@/components/icons/icons";
import "./styles.scss";

interface EditBtnProps {
  onClick: () => void;
}

const EditBtn: React.FC<EditBtnProps> = ({ onClick }: EditBtnProps) => {
  return (
    <button className="btn_edit_area" onClick={onClick}>
      <I.Pencil /> <p>Editar</p>
    </button>
  );
};

export default EditBtn;
