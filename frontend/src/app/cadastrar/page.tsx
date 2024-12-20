"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FormPage } from "@/components/layout/formPage/formPage";
import Input from "@/components/shared/input/input";
import I from "@/components/icons/icons";
import { Controller } from "../../services/controller";
import { useMessage } from "@/contexts/message.context";
import { useUser } from "@/contexts/user.context";

const Cadastrar: React.FC = () => {
  const router = useRouter();
  const { showMessage } = useMessage();
  const { getUser } = useUser();

  const controller = new Controller();

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleRegister = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const response: any = await controller.post("/user", {
      name,
      email,
      password,
    });

    if (response) {
      await controller
        .post("/auth/login", {
          email,
          password,
        })
        .then(async (res) => {
          if (res.error) {
            showMessage(res.error, "error");
          }

          localStorage.setItem("token", `Bearer ${res.access_token}`);
          showMessage("Cadastro realizado com sucesso!", "success");

          await getUser();
          router.push("/");
        });
    }
  };

  return (
    <div className="register">
      <FormPage.root>
        <FormPage.formImage />
        <FormPage.formArea
          backUrl="/"
          title="Cadastre-se:"
          onSubmit={(evt) => handleRegister(evt)}
        >
          <Input
            label="Nome:"
            type="text"
            name="name"
            value={name}
            onChange={(evt) => setName(evt.target.value)}
            placeholder="Seu nome completo"
            required
            icon={<I.Person />}
          />
          <Input
            label="Email:"
            type="email"
            name="email"
            value={email}
            onChange={(evt) => setEmail(evt.target.value)}
            placeholder="Seu email"
            required
            icon={<I.Mail />}
          />
          <Input
            label="Senha:"
            type="password"
            name="password"
            value={password}
            onChange={(evt) => setPassword(evt.target.value)}
            placeholder="Sua senha"
            minLength={8}
            maxLength={15}
            required
            icon={<I.Key />}
          />
        </FormPage.formArea>
      </FormPage.root>
    </div>
  );
};

export default Cadastrar;
