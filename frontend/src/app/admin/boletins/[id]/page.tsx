"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useMessage } from "@/contexts/message.context";
import { useVerify } from "@/hooks/useVerify";
import { useOneBoletim } from "@/hooks/useOneBoletim";
import { Controller } from "@/services/controller";
import LoadPage from "@/components/layout/loadPage/loadPage";
import { FormPage } from "@/components/layout/formPage/formPage";
import Input from "@/components/shared/input/input";
import I from "@/components/icons/icons";
import Textarea from "@/components/shared/textarea/textarea";

const EditBoletim: React.FC = () => {
  const router = useRouter();
  const { id } = useParams();
  const controller = new Controller();
  const { verified, verifing } = useVerify("ADMIN");
  const { showMessage } = useMessage();
  const { boletim, loading, error } = useOneBoletim(id as string);

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [author, setAuthor] = useState<string>("");

  useEffect(() => {
    if (boletim) {
      setTitle(boletim.title);
      setContent(boletim.content);
      setAuthor(boletim.author);
    } else {
      showMessage("Parece que houve um erro", "error");
      router.push("/admin/boletins");
    }
  }, [boletim, router, showMessage]);

  if (verifing || loading) {
    return <LoadPage />;
  }

  if (!verified) {
    showMessage("Você não pode entrar nesta área", "error");
    router.push("/login");
  }

  const handleEditBoletim = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const token = localStorage.getItem("token");

    if (token) {
      await controller
        .patch(`/boletim/${id}`, { title, content, author }, token)
        .then((res) => {
          if (res.error) {
            showMessage(res.error, "error");
            return;
          }

          showMessage("Boletim editado com sucesso!", "success");
          router.push("/admin/boletins");
        });
    }
  };

  return (
    <div className="edit_boletim">
      <FormPage.root>
        <FormPage.formImage />
        <FormPage.formArea
          backUrl="/admin/boletins"
          title="Edite este boletim:"
          onSubmit={async (evt) => await handleEditBoletim(evt)}
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
            label="Conteúdo:"
          />
          <Input
            label="Autor:"
            type="text"
            name="author"
            value={author}
            onChange={(evt) => setAuthor(evt.target.value)}
            placeholder="Nome do autor"
            required
            icon={<I.Person />}
          />
        </FormPage.formArea>
      </FormPage.root>
    </div>
  );
};

export default EditBoletim;
