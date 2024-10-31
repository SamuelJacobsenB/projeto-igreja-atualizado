"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useBoletins } from "@/hooks/useBoletins";
import { useMessage } from "@/contexts/message.context";
import { useVerify } from "@/hooks/useVerify";
import AdminDefaultLayout from "@/components/layout/adminDefult";
import LoadPage from "@/components/layout/loadPage/loadPage";
import Button from "@/components/shared/button/button";
import "./styles.scss";
import { Card } from "@/components/layout/card/card";
import { Two_buttons } from "./../../../components/shared/twoButtons/twoButtons";

const AdminBoletins: React.FC = () => {
  const router = useRouter();
  const { boletins, loading, error } = useBoletins();
  const { verified, verifing } = useVerify("ADMIN");
  const { showMessage } = useMessage();

  if (loading || verifing) {
    return <LoadPage />;
  }

  if (!verified) {
    showMessage("Você não pode entrar nesta área", "error");
    router.push("/login");
  }

  return (
    <AdminDefaultLayout>
      <div className="admin_boletins page">
        <Button
          onClick={() => router.push("/admin/boletins/create")}
          color="primary"
        >
          Cadastrar novo boletim:
        </Button>

        <h1>Veja os boletins listados abaixo: </h1>

        <hr />

        {boletins.length > 0 &&
          boletins.map((boletim) => (
            <Card.Boletim
              title={boletim.title}
              created_at={boletim.created_at}
              key={boletim.id}
            >
              <Two_buttons.default
                onEdit={() => {}}
                onDelete={async () => {}}
              />
            </Card.Boletim>
          ))}
        {boletins.length === 0 && <h2>Nenhum boletim cadastrado.</h2>}
      </div>
    </AdminDefaultLayout>
  );
};

export default AdminBoletins;
