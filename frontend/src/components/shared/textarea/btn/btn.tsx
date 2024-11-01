import React from "react";
import "./styles.scss";

interface TextAreaBtnProps {
  children: React.ReactNode;
  onClick(): void;
}

const TextAreaBtn: React.FC<TextAreaBtnProps> = ({
  children,
  onClick,
}: TextAreaBtnProps) => {
  return (
    <button type="button" className="text_area_btn" onClick={onClick}>
      {children}
    </button>
  );
};

export default TextAreaBtn;
