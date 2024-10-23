"use client";

import React from "react";
import Button from "@/components/shared/button/button";
import Img from "@/components/shared/img/img";
import "./styles.scss";

interface FormAreaProps {
  title: string;
  children: React.ReactNode;
  onSubmit: (evt: React.FormEvent<HTMLFormElement>) => void;
}

const FormArea: React.FC<FormAreaProps> = ({
  title,
  children,
  onSubmit,
}: FormAreaProps) => {
  return (
    <div className="form_area">
      <div className="informations">
        <Img src="/imgs/logo.png" alt="logo" width={280} height={260} />
        <h1>{title}</h1>
      </div>
      <form
        method="post"
        onSubmit={(evt: React.FormEvent<HTMLFormElement>) => onSubmit(evt)}
      >
        {children}
        <Button type="submit" color="primary">
          Enviar
        </Button>
      </form>
    </div>
  );
};

export default FormArea;
