"use client";

import React from "react";
import UserDefaultLayout from "@/components/layout/userDefaultLayout";
import { useBoletins } from "@/hooks/useBoletins";
import { getBoletimSemanal } from "@/functions/getBoletimSemanal";
import Topic from "@/components/shared/topic/topic";
import LoadPage from "@/components/layout/loadPage/loadPage";
import "./styles.scss";
import Container from "@/components/shared/container/container";
import Social from "@/components/layout/social/social";

const Home: React.FC = () => {
  const { boletins, loading, error } = useBoletins();

  if (loading) {
    return <LoadPage />;
  }

  const boletimSemanal = getBoletimSemanal(boletins);

  return (
    <UserDefaultLayout>
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
      </div>
      <Social />
    </UserDefaultLayout>
  );
};

export default Home;
