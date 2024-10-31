"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useVerify } from "@/hooks/useVerify";
import { useMessage } from "@/contexts/message.context";
import { Controller } from "@/services/controller";
import I from "@/components/icons/icons";
import LoadPage from "@/components/layout/loadPage/loadPage";
import { FormPage } from "@/components/layout/formPage/formPage";
import Input from "@/components/shared/input/input";

const CreateUpload: React.FC = () => {
  const router = useRouter();
  const controller = new Controller();
  const { showMessage } = useMessage();
  const { verified, verifing } = useVerify("ADMIN");

  const [file, setFile] = useState<File | null>(null);
  const [type, setType] = useState<"WARNING" | "DEFAULT">("DEFAULT");

  if (verifing) {
    return <LoadPage />;
  }

  if (!verified) {
    showMessage("Você não pode entrar nesta área", "error");
    router.push("/login");
  }

  const handleCreateUpload = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const token = localStorage.getItem("token");

    if (token) {
      await controller
        .post(`/upload/${type.toLowerCase()}`, token)
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
          <Input
            label="Arquivo:"
            type="file"
            name="file"
            value={file}
            onChange={(evt) =>
              setFile(evt.target.files != null ? evt.target.files[0] : null)
            }
            icon={<I.Image />}
            placeholder="Seu arquivo"
            required
          />
        </FormPage.formArea>
      </FormPage.root>
    </div>
  );
};

export default CreateUpload;
