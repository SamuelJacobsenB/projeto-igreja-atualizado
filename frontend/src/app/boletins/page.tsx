"use client";

import React, { useEffect, useState } from "react";
import UserDefaultLayout from "@/components/layout/userDefaultLayout";
import Search from "@/components/shared/search/search";
import LoadPage from "@/components/layout/loadPage/loadPage";
import { useBoletins } from "@/hooks/useBoletins";
import "./styles.scss";
import { Boletim } from "@/types/boletim.type";

const Boletins: React.FC = () => {
  const { boletins, loading, error } = useBoletins();
  const [boletimList, setBoletimList] = useState<Boletim[]>([]);

  useEffect(() => {
    setBoletimList(boletins);
  }, [boletins]);

  if (loading) {
    return <LoadPage />;
  }

  console.log(boletimList, boletins);

  return (
    <UserDefaultLayout>
      <div className="boletins page">
        <h1>Veja todos os boletins listados abaixo:</h1>
        <Search
          placeholder="Pesquise por boletins"
          fixedItens={boletins}
          setItens={setBoletimList}
        />
        <div className="list">
          {boletimList &&
            boletimList.map((boletim) => (
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
