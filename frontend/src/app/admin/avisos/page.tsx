"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useWarnings } from "@/hooks/useWarnings";
import { useMessage } from "@/contexts/message.context";
import { useVerify } from "@/hooks/useVerify";
import { Controller } from "@/services/controller";
import AdminDefaultLayout from "@/components/layout/adminDefult";
import LoadPage from "@/components/layout/loadPage/loadPage";
import Button from "@/components/shared/button/button";
import { Card } from "@/components/layout/card/card";
import { Two_buttons } from "./../../../components/shared/twoButtons/twoButtons";
import "./styles.scss";

const AdminWarnings: React.FC = () => {
  const router = useRouter();
  const controller = new Controller();
  const { warnings, loading, error } = useWarnings();
  const { verified, verifing } = useVerify("ADMIN");
  const { showMessage } = useMessage();

  if (loading || verifing) {
    return <LoadPage />;
  }

  if (!verified) {
    showMessage("Você não pode entrar nesta área", "error");
    router.push("/login");
  }

  const handleDelete = async (id: string) => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error();
      }

      await controller.delete(`/avisos/${id}`, token).then((res) => {
        if (res.error) {
          showMessage(res.error, "error");
        }

        showMessage("Aviso excluído com sucesso!", "success");
        router.refresh();
      });
    } catch (error) {
      showMessage("Não foi possível excluir este aviso", "error");
    }
  };

  return (
    <AdminDefaultLayout>
      <div className="admin_warnings page">
        <Button
          onClick={() => router.push("/admin/avisos/create")}
          color="primary"
        >
          Cadastrar novo aviso:
        </Button>

        <h1>Veja os avisos listados abaixo: </h1>

        <hr />

        <div className="warning_list">
          {warnings.length > 0 &&
            warnings.map((warning) => (
              <Card.Boletim
                title={warning.title}
                created_at={warning.created_at}
                key={warning.id}
                className="warning_modify_card"
              >
                <Two_buttons.default
                  onEdit={() => router.push(`/admin/avisos/${warning.id}`)}
                  onDelete={async () => await handleDelete(warning.id)}
                />
              </Card.Boletim>
            ))}
        </div>
        {warnings.length === 0 && <h2>Nenhum aviso cadastrado.</h2>}
      </div>
    </AdminDefaultLayout>
  );
};

export default AdminWarnings;
