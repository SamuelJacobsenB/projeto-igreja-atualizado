import React from "react";

interface TextAreaBtnProps {
  children: React.ReactNode;
  onClick(): void;
}

const TextAreaBtn: React.FC<TextAreaBtnProps> = ({
  children,
  onClick,
}: TextAreaBtnProps) => {
  return <button onClick={onClick}>{children}</button>;
};

export default TextAreaBtn;
