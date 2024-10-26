"use client";

import React from "react";
import UserDefaultLayout from "@/components/layout/userDefaultLayout";
import { useBoletins } from "@/hooks/useBoletins";
import { getBoletimSemanal } from "@/functions/getBoletimSemanal";
import Topic from "@/components/shared/topic/topic";
import LoadPage from "@/components/layout/loadPage/loadPage";
import "./styles.scss";

const Home: React.FC = () => {
  const { boletins, loading, error } = useBoletins();

  if (loading) {
    return <LoadPage />;
  }

  const boletimSemanal = getBoletimSemanal(boletins);

  return (
    <>
      <UserDefaultLayout />
      <div className="home page">
        <Topic type="bottom">Boletim</Topic>
        {boletimSemanal ? (
          <div className="boletim">
            <h1>{boletimSemanal.title}</h1>
            <div className="content">{boletimSemanal.content}</div>
            <small>{boletimSemanal.author}</small>
          </div>
        ) : (
          <h2>Nenhum boletim cadastrado esta semana</h2>
        )}
      </div>
    </>
  );
};

export default Home;
