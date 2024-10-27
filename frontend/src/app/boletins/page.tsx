"use client";

import React from "react";
import UserDefaultLayout from "@/components/layout/userDefaultLayout";
import Search from "@/components/shared/search/search";
import LoadPage from "@/components/layout/loadPage/loadPage";
import { useBoletins } from "@/hooks/useBoletins";
import "./styles.scss";

const Boletins: React.FC = () => {
  const { boletins, loading, error } = useBoletins();

  if (loading) {
    return <LoadPage />;
  }

  return (
    <UserDefaultLayout>
      <div className="boletins page">
        <h1>Veja todos os boletins listados abaixo:</h1>
        <Search />
        <div className="list">
          {boletins.map((boletim) => (
            <div key={boletim.id} className="boletim">
              <h2>{boletim.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </UserDefaultLayout>
  );
};

export default Boletins;
