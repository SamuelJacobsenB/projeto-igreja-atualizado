import React from "react";
import "./styles.scss";

const Root = ({ children }: { children: React.ReactNode }) => {
  return <div className="form_page">{children}</div>;
};

export default Root;
