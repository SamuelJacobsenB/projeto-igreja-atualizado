"use client";

import React from "react";
import { useBoletins } from "@/hooks/useBoletins";
import { getBoletimSemanal } from "@/functions/getBoletimSemanal";
import DefaultLayout from "@/components/layout/defaultLayout";
import Topic from "@/components/shared/topic/topic";
import LoadPage from "@/components/layout/loadPage/loadPage";
import Container from "@/components/shared/container/container";
import Social from "@/components/layout/social/social";
import "./styles.scss";

const Home: React.FC = () => {
  const { boletins, loading, error } = useBoletins();

  if (loading) {
    return <LoadPage />;
  }

  const boletimSemanal = getBoletimSemanal(boletins);

  return (
    <DefaultLayout>
      <div className="home page">
        {boletimSemanal ? (
          <Container className="boletim">
            <Topic>Pastoral</Topic>
            <h1>{boletimSemanal.title}</h1>
            <hr />
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: boletimSemanal.content }}
            />
            <small>{boletimSemanal.author}</small>
          </Container>
        ) : (
          <h2>Nenhum boletim cadastrado esta semana</h2>
        )}
        <Social />
      </div>
    </DefaultLayout>
  );
};

export default Home;
