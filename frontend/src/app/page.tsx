"use client";

import React from "react";
import { useBoletins } from "@/hooks/useBoletins";
import { useFiles } from "@/hooks/useFiles";
import { getFilesByType } from "@/functions/getFilesByType";
import { getBoletimSemanal } from "@/functions/getBoletimSemanal";
import DefaultLayout from "@/components/layout/defaultLayout";
import Topic from "@/components/shared/topic/topic";
import LoadPage from "@/components/layout/loadPage/loadPage";
import Container from "@/components/shared/container/container";
import Social from "@/components/layout/social/social";
import "./styles.scss";
import Carousel from "@/components/shared/carousel/carousel";

const Home: React.FC = () => {
  const { boletins, loading, error } = useBoletins();
  const { files, loadingFiles, fileError } = useFiles();

  if (loading || loadingFiles) {
    return <LoadPage />;
  }

  const { defaultFiles } = getFilesByType(files);
  const boletimSemanal = getBoletimSemanal(boletins);

  return (
    <DefaultLayout>
      <div className="home page">
        {defaultFiles.length > 0 && <Carousel files={defaultFiles} />}

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
