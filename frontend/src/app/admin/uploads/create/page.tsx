"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useVerify } from "@/hooks/useVerify";
import { useMessage } from "@/contexts/message.context";
import { Controller } from "@/services/controller";
import I from "@/components/icons/icons";
import LoadPage from "@/components/layout/loadPage/loadPage";
import { FormPage } from "@/components/layout/formPage/formPage";
import "./styles.scss";

const CreateUpload: React.FC = () => {
  const router = useRouter();
  const controller = new Controller();
  const { showMessage } = useMessage();
  const { verified, verifing } = useVerify("ADMIN");

  const [file, setFile] = useState<File | null>(null);
  const [type, setType] = useState<"WARNING" | "DEFAULT" | string>();

  if (verifing) {
    return <LoadPage />;
  }

  if (verified === false) {
    showMessage("Você não pode entrar nesta área", "error");
    router.push("/login");
  }

  const handleCreateUpload = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const token = localStorage.getItem("token");

    if (!type || type === "" || type === null || type === undefined) {
      showMessage("Defina um tipo para imagem", "error");
      return;
    }

    if (token) {
      await controller
        .post(`/upload/${type.toLowerCase()}`, { file, type }, token)
        .then(() => {
          showMessage("Arquivo salvo com sucesso", "success");
          router.push("/admin/uploads");
        })
        .catch((error) => {
          showMessage(error.error, "error");
        });
    }
  };

  return (
    <div className="create_upload">
      <FormPage.root>
        <FormPage.formImage />
        <FormPage.formArea
          backUrl="/admin/uploads"
          title="Cadastre um upload:"
          onSubmit={async (evt) => await handleCreateUpload(evt)}
        >
          <div className="input_file">
            <div className="input_area">
              {!file && <label htmlFor="file">Escolha um arquivo</label>}
              {file && (
                <label htmlFor="file">Arquivo escolhido: {file.name}</label>
              )}
              <input
                type="file"
                name="file"
                id="file"
                accept=".jpg,.jpeg,.png"
                placeholder={"Escolha um arquivo"}
                onChange={(evt) => {
                  setFile(evt.target.files && evt.target.files[0]);
                  console.log(file?.arrayBuffer);
                }}
                required
              />
              <div className="icon">
                <I.Image />
              </div>
            </div>
          </div>
          <div className="input_option">
            <label htmlFor="select">Selecione o tipo:</label>
            <div className="input_area">
              <div className="value_area">
                {type && <div className="selected_option">{type}</div>}
                <select
                  name="select"
                  id="select"
                  value={type}
                  onChange={(evt) => setType(evt.target.value)}
                  required
                >
                  <option value="">--Selecione uma opção--</option>
                  <option value="DEFAULT">Padrão</option>
                  <option value="WARNING">Avisos</option>
                </select>
              </div>
              <div className="icon">
                <I.Image />
              </div>
            </div>
          </div>
        </FormPage.formArea>
      </FormPage.root>
    </div>
  );
};

export default CreateUpload;
