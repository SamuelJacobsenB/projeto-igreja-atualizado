import React from "react";
import "./styles.scss";

interface RootProps {
  children: React.ReactNode;
}

const Root: React.FC<RootProps> = ({ children }: RootProps) => {
  return <nav>{children}</nav>;
};

export default Root;
