import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color: "primary" | "secondary";
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
