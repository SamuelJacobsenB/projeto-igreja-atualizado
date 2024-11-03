"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useCultos } from "@/hooks/useCultos";
import { useMessage } from "@/contexts/message.context";
import { useVerify } from "@/hooks/useVerify";
import { Controller } from "@/services/controller";
import DefaultLayout from "@/components/layout/defaultLayout";
import LoadPage from "@/components/layout/loadPage/loadPage";
import Button from "@/components/shared/button/button";
import { Card } from "@/components/layout/card/card";
import { Two_buttons } from "./../../../components/shared/twoButtons/twoButtons";
import Search from "@/components/shared/search/search";
import { Culto } from "@/types/culto.type";
import "./styles.scss";

const AdminCultos: React.FC = () => {
  const router = useRouter();
  const controller = new Controller();
  const { cultos, loading, error } = useCultos();
  const { verified, verifing } = useVerify("ADMIN");
  const { showMessage } = useMessage();
  const [cultoList, setCultoList] = useState<Culto[]>([]);

  useEffect(() => {
    if (cultos) {
      setCultoList(cultos);
    }
  }, [cultos]);

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

      await controller.delete(`/culto/${id}`, token).then((res) => {
        if (res.error) {
          showMessage(res.error, "error");
        }

        showMessage("Culto excluído com sucesso!", "success");
        router.refresh();
      });
    } catch (error) {
      showMessage("Não foi possível excluir este culto", "error");
    }
  };

  return (
    <DefaultLayout>
      <div className="admin_cultos page">
        <Button
          onClick={() => router.push("/admin/cultos/create")}
          color="primary"
        >
          Cadastrar novo culto
        </Button>

        <h1>Veja os cultos listados abaixo: </h1>

        <hr />

        <Search
          placeholder="Pesquise por cultos"
          fixedItens={cultos}
          setItens={setCultoList}
        />

        <div className="culto_list">
          {cultos.length > 0 &&
            cultoList.map((culto) => (
              <Card.Culto
                title={culto.title}
                created_at={culto.created_at}
                key={culto.id}
                className="culto_modify_card"
              >
                <Two_buttons.default
                  onEdit={() => router.push(`/admin/cultos/${culto.id}`)}
                  onDelete={async () => await handleDelete(culto.id)}
                />
              </Card.Culto>
            ))}
        </div>
        {cultos.length === 0 && <h2>Nenhum culto cadastrado.</h2>}
      </div>
    </DefaultLayout>
  );
};

export default AdminCultos;
