import React from "react";
import "./styles.scss";

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({
  className,
  children,
}: ContainerProps) => {
  return <div className={`container ${className}`}>{children}</div>;
};

export default Container;
