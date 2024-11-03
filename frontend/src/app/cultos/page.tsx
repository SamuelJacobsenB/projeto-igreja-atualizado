"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useCultos } from "@/hooks/useCultos";
import DefaultLayout from "@/components/layout/defaultLayout";
import LoadPage from "@/components/layout/loadPage/loadPage";
import { Card } from "@/components/layout/card/card";
import Search from "@/components/shared/search/search";
import { Culto } from "@/types/culto.type";
import "./styles.scss";

const Cultos: React.FC = () => {
  const router = useRouter();
  const { cultos, loading, error } = useCultos();
  const [cultoList, setCultoList] = useState<Culto[]>([]);

  useEffect(() => {
    setCultoList(cultos);
  }, [cultos]);

  if (loading) {
    return <LoadPage />;
  }

  return (
    <DefaultLayout>
      <div className="cultos page">
        <h1>Veja os cultos listados abaixo:</h1>
        <hr />
        <Search
          placeholder="Pesquise por cultos"
          fixedItens={cultos}
          setItens={setCultoList}
        />
        <div className="list">
          {cultoList &&
            cultoList.map((culto) => (
              <Card.Culto
                key={culto.id}
                title={culto.title}
                created_at={culto.created_at}
                onClick={() => router.push(`/cultos/${culto.id}`)}
              />
            ))}
          {cultoList.length === 0 && (
            <h2>Nenhum culto foi cadastrado até o momento.</h2>
          )}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Cultos;
