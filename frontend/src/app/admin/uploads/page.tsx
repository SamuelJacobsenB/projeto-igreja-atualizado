"use client";

import React from "react";
import { useFiles } from "@/hooks/useFiles";
import AdminDefaultLayout from "@/components/layout/adminDefult";
import LoadPage from "@/components/layout/loadPage/loadPage";
import Container from "@/components/shared/container/container";
import Img from "@/components/shared/img/img";
import { getFilesByType } from "@/functions/getFilesByType";
import "./styles.scss";

const AdminUploads: React.FC = () => {
  const { files, loading, error } = useFiles();

  if (loading) {
    return <LoadPage />;
  }

  const { defaultFiles, warningFiles } = getFilesByType(files);

  return (
    <AdminDefaultLayout>
      <div className="upload page">
        <h1>Arquivos: </h1>
        <hr />
        <div className="default_files">
          <h1>Arquivos padrão</h1>
          {defaultFiles.map((file) => (
            <Container key={file.id}>
              <Img src={file.data} alt={file.name} width={100} height={100} />
              <h2>{file.name}</h2>
            </Container>
          ))}
        </div>
        <div className="warning_files">
          <h1>Arquivos de avisos</h1>
          {warningFiles.map((file) => (
            <Container key={file.id}>
              <Img src={file.data} alt={file.name} width={100} height={100} />
              <h2>{file.name}</h2>
            </Container>
          ))}
        </div>
      </div>
    </AdminDefaultLayout>
  );
};

export default AdminUploads;
