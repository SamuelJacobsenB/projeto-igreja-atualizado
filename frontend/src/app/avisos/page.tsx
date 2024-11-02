"use client";

import React from "react";
import { useWarnings } from "@/hooks/useWarnings";
import DefaultLayout from "@/components/layout/defaultLayout";
import LoadPage from "@/components/layout/loadPage/loadPage";
import { useFiles } from "@/hooks/useFiles";
import { getFilesByType } from "@/functions/getFilesByType";
import { Card } from "@/components/layout/card/card";
import "./styles.scss";

const WarningsPage: React.FC = () => {
  const { warnings, loading, error } = useWarnings();
  const { files, loadingFiles, fileError } = useFiles();

  if (loading || loadingFiles) {
    return <LoadPage />;
  }

  const { warningFiles } = getFilesByType(files);

  return (
    <DefaultLayout>
      <div className="warning_page page">
        <h1>Veja todos os avisos abaixo:</h1>
        <hr />

        <div className="warning_list">
          {warnings.length === 0 && <h2>Nenhum aviso cadastrado.</h2>}
          {warnings.length > 0 &&
            warnings.map((warning) => (
              <Card.Warning
                title={warning.title}
                content={warning.content}
                key={warning.id}
              />
            ))}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default WarningsPage;
