import React from "react";
import "./styles.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: () => void;
  color: "primary" | "confirm" | "cancel";
}

const Button: React.FC<ButtonProps> = ({
  children,
  color,
  type,
  onClick,
}: ButtonProps) => {
  return (
    <button className={`btn ${color}`} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
