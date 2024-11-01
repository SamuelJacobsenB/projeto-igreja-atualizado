"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DefaultLayout from "@/components/layout/defaultLayout";
import Search from "@/components/shared/search/search";
import LoadPage from "@/components/layout/loadPage/loadPage";
import { useBoletins } from "@/hooks/useBoletins";
import { Boletim } from "@/types/boletim.type";
import { Card } from "@/components/layout/card/card";
import "./styles.scss";

const Boletins: React.FC = () => {
  const router = useRouter();
  const { boletins, loading, error } = useBoletins();
  const [boletimList, setBoletimList] = useState<Boletim[]>([]);

  useEffect(() => {
    setBoletimList(boletins);
  }, [boletins]);

  if (loading) {
    return <LoadPage />;
  }

  return (
    <DefaultLayout>
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
              <Card.Boletim
                key={boletim.id}
                title={boletim.title}
                created_at={boletim.created_at}
                onClick={() => router.push(`/boletins/${boletim.id}`)}
              />
            ))}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Boletins;
