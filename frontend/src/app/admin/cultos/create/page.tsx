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
import Textarea from "@/components/shared/textarea/textarea";

const CreateCulto: React.FC = () => {
  const router = useRouter();
  const controller = new Controller();
  const { verified, verifing } = useVerify("ADMIN");
  const { showMessage } = useMessage();

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [pregador, setPregador] = useState<string>("");
  const [video, setVideo] = useState<string>("");

  if (verifing) {
    return <LoadPage />;
  }

  if (!verified) {
    showMessage("Você não pode entrar nesta área", "error");
    router.push("/login");
  }

  const handleCreateCulto = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const token = localStorage.getItem("token");

    if (token) {
      await controller
        .post("/culto", { title, description, pregador, video }, token)
        .then((res) => {
          if (res.error) {
            showMessage(res.error, "error");
            return;
          }

          showMessage("Culto cadastrado com sucesso!", "success");
          router.push("/admin/cultos");
        });
    }
  };

  return (
    <div className="create_boletim">
      <FormPage.root>
        <FormPage.formImage />
        <FormPage.formArea
          backUrl="/admin/cultos"
          title="Cadastre um culto:"
          onSubmit={async (evt) => await handleCreateCulto(evt)}
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
            setValue={setDescription}
            value={description}
            name="text_area"
            placeholder="Sua descrição aqui"
            label="Descrição:"
          />
          <Input
            label="Pregador:"
            type="text"
            name="pregador"
            value={pregador}
            onChange={(evt) => setPregador(evt.target.value)}
            placeholder="Nome do pregador"
            required
            icon={<I.Person />}
          />
          <Input
            label="Vídeo:"
            type="text"
            name="video"
            value={video}
            onChange={(evt) => setVideo(evt.target.value)}
            placeholder="Iframe do vídeo"
            required
            icon={<I.Video />}
          />
        </FormPage.formArea>
      </FormPage.root>
    </div>
  );
};

export default CreateCulto;
