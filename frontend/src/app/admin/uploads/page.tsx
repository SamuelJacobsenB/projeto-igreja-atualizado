"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useFiles } from "@/hooks/useFiles";
import AdminDefaultLayout from "@/components/layout/adminDefult";
import LoadPage from "@/components/layout/loadPage/loadPage";
import Container from "@/components/shared/container/container";
import Img from "@/components/shared/img/img";
import { Two_buttons } from "@/components/shared/twoButtons/twoButtons";
import { getFilesByType } from "@/functions/getFilesByType";
import "./styles.scss";
import { useVerify } from "@/hooks/useVerify";
import { useMessage } from "@/contexts/message.context";

const AdminUploads: React.FC = () => {
  const router = useRouter();
  const { showMessage } = useMessage();
  const { files, loading, error } = useFiles();
  const { verified, verifing } = useVerify("ADMIN");

  if (loading || verifing) {
    return <LoadPage />;
  }

  if (verified === false) {
    showMessage("Você não pode entrar nesta área", "error");
    router.push("/login");
  }

  const { defaultFiles, warningFiles } = getFilesByType(files);

  const handleEdit = (id: string) => {
    router.push(`/admin/uploads/${id}`);
  };

  return (
    <AdminDefaultLayout>
      <div className="upload page">
        <h1>Veja os arquivos: </h1>

        <hr />

        <Container className="default_files files">
          <h1>Arquivos padrão: </h1>
          {defaultFiles.length == 0 && <h2>Nenhuma imagem cadastrada</h2>}
          {defaultFiles.map((file) => (
            <Container key={file.id} className="file_container">
              <Img
                src={file.data}
                alt={file.name}
                width={100}
                height={100}
                className="container_image"
              />
              <Two_buttons.default
                onEdit={() => handleEdit(file.id)}
                onDelete={async () => {}}
              />
            </Container>
          ))}
        </Container>

        <Container className="warning_files files">
          <h1>Arquivos de avisos: </h1>
          {warningFiles.length == 0 && <h2>Nenhuma imagem cadastrada</h2>}
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
              <Two_buttons.default
                onEdit={() => handleEdit(file.id)}
                onDelete={async () => {}}
              />
            </Container>
          ))}
        </Container>
      </div>
    </AdminDefaultLayout>
  );
};

export default AdminUploads;
