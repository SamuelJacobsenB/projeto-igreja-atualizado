"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useMessage } from "@/contexts/message.context";
import { useVerify } from "@/hooks/useVerify";
import { useOneWarning } from "@/hooks/useOneWarning";
import { Controller } from "@/services/controller";
import LoadPage from "@/components/layout/loadPage/loadPage";
import { FormPage } from "@/components/layout/formPage/formPage";
import Input from "@/components/shared/input/input";
import I from "@/components/icons/icons";
import Textarea from "@/components/shared/textarea/textarea";

const EditWarning: React.FC = () => {
  const router = useRouter();
  const { id } = useParams();
  const controller = new Controller();
  const { verified, verifing } = useVerify("ADMIN");
  const { showMessage } = useMessage();
  const { warning, loading, error } = useOneWarning(id as string);

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    if (warning) {
      setTitle(warning.title);
      setContent(warning.content);
    } else {
      showMessage("Parece que houve um erro", "error");
      router.push("/admin/warnings");
    }
  }, [warning, router, showMessage]);

  if (verifing || loading) {
    return <LoadPage />;
  }

  if (!verified) {
    showMessage("Você não pode entrar nesta área", "error");
    router.push("/login");
  }

  const handleEditWarning = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const token = localStorage.getItem("token");

    if (token) {
      await controller
        .patch(`/warning/${id}`, { title, content }, token)
        .then((res) => {
          if (res.error) {
            showMessage(res.error, "error");
            return;
          }

          showMessage("Aviso editado com sucesso!", "success");
          router.push("/admin/warnings");
        });
    }
  };

  return (
    <div className="edit_warning">
      <FormPage.root>
        <FormPage.formImage />
        <FormPage.formArea
          backUrl="/admin/warnings"
          title="Edite este aviso:"
          onSubmit={async (evt) => await handleEditWarning(evt)}
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
            placeholder="Seu conteúdo do aviso"
            label="Conteúdo:"
          />
        </FormPage.formArea>
      </FormPage.root>
    </div>
  );
};

export default EditWarning;
