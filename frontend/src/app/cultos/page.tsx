"use client";

import React from "react";
import DefaultLayout from "@/components/layout/defaultLayout";
import LoadPage from "@/components/layout/loadPage/loadPage";
import "./styles.scss";

const Cultos: React.FC = () => {
  return (
    <DefaultLayout>
      <div className="cultos page">
        <h1>Veja os cultos listados abaixo:</h1>
        <hr />
      </div>
    </DefaultLayout>
  );
};

export default Cultos;
