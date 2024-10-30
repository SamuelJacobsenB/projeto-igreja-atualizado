import React from "react";
import I from "@/components/icons/icons";

interface EditBtnProps {
  onClick: () => void;
}

const EditBtn: React.FC<EditBtnProps> = ({ onClick }: EditBtnProps) => {
  return (
    <button className="btn_edit_area" onClick={onClick}>
      <I.Pencil />
    </button>
  );
};

export default EditBtn;
