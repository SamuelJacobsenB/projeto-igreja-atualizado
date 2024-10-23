import React from "react";
import "./styles.scss";

const FormArea: React.FC<{ children: React.ReactNode }> = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="form_area">
      <div className="informations"></div>
      <form method="post">{children}</form>
    </div>
  );
};

export default FormArea;
