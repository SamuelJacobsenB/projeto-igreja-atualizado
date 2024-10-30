import React from "react";
import "./styles.scss";

interface RootProps {
  children: React.ReactNode;
}

const Root: React.FC<RootProps> = ({ children }: RootProps) => {
  return <div className="btn_root">{children}</div>;
};

export default Root;
