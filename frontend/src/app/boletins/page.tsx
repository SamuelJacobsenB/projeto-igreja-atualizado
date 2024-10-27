"use client";

import React from "react";
import UserDefaultLayout from "@/components/layout/userDefaultLayout";
import { useBoletins } from "@/hooks/useBoletins";
import "./styles.scss";

const Boletins = () => {
  return (
    <UserDefaultLayout>
      <div className="boletins page">
        <h1>Veja todos os boletins listados abaixo:</h1>
      </div>
    </UserDefaultLayout>
  );
};

export default Boletins;
