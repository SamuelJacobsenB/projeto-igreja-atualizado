"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useBoletins } from "@/hooks/useBoletins";
import { useMessage } from "@/contexts/message.context";
import { useVerify } from "@/hooks/useVerify";
import { Controller } from "@/services/controller";
import AdminDefaultLayout from "@/components/layout/adminDefult";
import LoadPage from "@/components/layout/loadPage/loadPage";
import Button from "@/components/shared/button/button";
import { Card } from "@/components/layout/card/card";
import { Two_buttons } from "./../../../components/shared/twoButtons/twoButtons";
import Search from "@/components/shared/search/search";
import { Boletim } from "@/types/boletim.type";
import "./styles.scss";

const AdminBoletins: React.FC = () => {
  const router = useRouter();
  const controller = new Controller();
  const { boletins, loading, error } = useBoletins();
  const { verified, verifing } = useVerify("ADMIN");
  const { showMessage } = useMessage();
  const [boletimList, setBoletimList] = useState<Boletim[]>([]);

  useEffect(() => {
    if (boletins) {
      setBoletimList(boletins);
    }
  }, [boletins]);

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

      await controller.delete(`/boletim/${id}`, token).then((res) => {
        if (res.error) {
          showMessage(res.error, "error");
        }

        showMessage("Boletim excluído com sucesso!", "success");
        router.refresh();
      });
    } catch (error) {
      showMessage("Não foi possível excluir este boletim", "error");
    }
  };

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

        <Search
          placeholder="Pesquise por boletins"
          fixedItens={boletins}
          setItens={setBoletimList}
        />

        <div className="boletim_list">
          {boletins.length > 0 &&
            boletimList.map((boletim) => (
              <Card.Boletim
                title={boletim.title}
                created_at={boletim.created_at}
                key={boletim.id}
                className="boletim_modify_card"
              >
                <Two_buttons.default
                  onEdit={() => router.push(`/admin/warnings/${boletim.id}`)}
                  onDelete={async () => await handleDelete(boletim.id)}
                />
              </Card.Boletim>
            ))}
        </div>
        {boletins.length === 0 && <h2>Nenhum boletim cadastrado.</h2>}
      </div>
    </AdminDefaultLayout>
  );
};

export default AdminBoletins;
