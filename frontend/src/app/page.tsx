"use client";

import React from "react";
import { useBoletins } from "@/hooks/useBoletins";
import { useFiles } from "@/hooks/useFiles";
import { getFilesByType } from "@/functions/getFilesByType";
import { getBoletimSemanal } from "@/functions/getBoletimSemanal";
import DefaultLayout from "@/components/layout/defaultLayout";
import LoadPage from "@/components/layout/loadPage/loadPage";
import "./styles.scss";
import Carousel from "@/components/shared/carousel/carousel";
import I from "@/components/icons/icons";
import "./styles.scss";

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
          <div className="boletim">
            <div className="boletim_info">
              <h1 className="boletim_topic">PASTORAL</h1>
              <h1>{boletimSemanal.title}</h1>
              <hr />
              <div
                className="content"
                dangerouslySetInnerHTML={{ __html: boletimSemanal.content }}
              />
              <small>{boletimSemanal.author}</small>
            </div>
          </div>
        ) : (
          <h2>Nenhum boletim cadastrado esta semana</h2>
        )}

        <div className="home_location">
          <div className="location_info">
            <h1>
              <I.Location /> Localização
            </h1>
            <p>
              Av. Graciano Neves, 69 - Centro - São Gabriel da Palha/ES <br />{" "}
              (ao lado do Banco do Brasil)
            </p>
          </div>
          <div className="location_map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235.75065674101603!2d-40.536133163032666!3d-19.019258632509434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb6646905abd9af%3A0xe8f5aacdab87b83d!2sR.%20Argeu%20Rezende%2C%20239%20-%20Ap.%20202%20-%20Para%C3%ADso%2C%20S%C3%A3o%20Gabriel%20da%20Palha%20-%20ES%2C%2029780-000!5e0!3m2!1spt-BR!2sbr!4v1730644228773!5m2!1spt-BR!2sbr"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Home;
