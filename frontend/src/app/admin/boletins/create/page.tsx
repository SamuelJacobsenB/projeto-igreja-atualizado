"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useMessage } from "@/contexts/message.context";
import { useVerify } from "@/hooks/useVerify";
import { Controller } from "@/services/controller";
import LoadPage from "@/components/layout/loadPage/loadPage";
import { FormPage } from "@/components/layout/formPage/formPage";
import Input from "@/components/shared/input/input";
import I from "@/components/icons/icons";
import "./styles.scss";
import Textarea from "@/components/shared/textarea/textarea";

const CreateBoletim: React.FC = () => {
  const router = useRouter();
  const controller = new Controller();
  const { verified, verifing } = useVerify("ADMIN");
  const { showMessage } = useMessage();

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [author, setAuthor] = useState<string>("");

  if (verifing) {
    return <LoadPage />;
  }

  if (!verified) {
    showMessage("Você não pode entrar nesta área", "error");
    router.push("/login");
  }

  const handleCreateBoletim = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const token = localStorage.getItem("token");

    if (token) {
      await controller
        .post("/boletim", { title, content, author }, token)
        .then((res) => {
          if (res.error) {
            showMessage(res.error, "error");
            return;
          }

          showMessage("Boletim cadastrado com sucesso!", "success");
          router.push("/admin/boletins");
        });
    }
  };

  return (
    <div className="create_boletim">
      <FormPage.root>
        <FormPage.formImage />
        <FormPage.formArea
          backUrl="/admin/boletins"
          title="Cadastre um upload:"
          onSubmit={async (evt) => await handleCreateBoletim(evt)}
        >
          <Input
            label="Título:"
            type="text"
            name="title"
            value={title}
            onChange={(evt) => setTitle(evt.target.value)}
            placeholder="Digite o título"
            required
            icon={<I.Book />}
          />
          <Textarea
            setValue={setContent}
            value={content}
            name="text_area"
            placeholder="Seu conteúdo do boletim"
            label="Conteúdo"
          />
        </FormPage.formArea>
      </FormPage.root>
    </div>
  );
};

export default CreateBoletim;
