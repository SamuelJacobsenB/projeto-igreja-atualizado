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
        <h1>Veja os arquivos: </h1>
        <hr />
        <Container className="default_files files">
          <h1>Arquivos padrão: </h1>
          {defaultFiles.map((file) => (
            <Container key={file.id} className="file_container">
              <Img
                src={file.data}
                alt={file.name}
                width={100}
                height={100}
                className="container_image"
              />
              <h2>{file.name}</h2>
            </Container>
          ))}
        </Container>
        <Container className="warning_files files">
          <h1>Arquivos de avisos: </h1>
          {warningFiles.map((file) => (
            <Container key={file.id} className="file_container">
              <Img
                src={file.data}
                alt={file.name}
                className="container_image"
                width={0}
                height={0}
                layout="responsive"
              />
              <h2>{file.name}</h2>
            </Container>
          ))}
        </Container>
      </div>
    </AdminDefaultLayout>
  );
};

export default AdminUploads;
