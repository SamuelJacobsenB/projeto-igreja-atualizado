"use client";

import React from "react";
import { useUser } from "@/contexts/user.context";
import Link from "next/link";
import I from "@/components/icons/icons";
import "./styles.scss";

const UserLinks: React.FC = () => {
  const { role } = useUser();

  return (
    <ul>
      <li style={{ display: role === "ADMIN" ? "flex" : "none" }}>
        <Link href={"/admin/boletins"}>
          <I.Person />
          Administrador
        </Link>
      </li>
      <li>
        <Link href={"/"}>
          <I.Home />
          Principal
        </Link>
      </li>
      <li>
        <Link href={"/boletins"}>
          <I.Paper />
          Boletins
        </Link>
      </li>
      <li>
        <Link href={"/cultos"}>
          <I.Book />
          Cultos
        </Link>
      </li>
      <li>
        <Link href={"/avisos"}>
          <I.Warning />
          Avisos
        </Link>
      </li>
      <li>
        <Link href={"/contribua"}>
          <I.Add />
          Contribua
        </Link>
      </li>
      <li>
        <Link href={"/contato"}>
          <I.Phone />
          Contato
        </Link>
      </li>
      <li>
        <Link href={"/cadastrar"}>
          <I.Person />
          Cadastro
        </Link>
      </li>
      <li>
        <Link href={"/login"}>
          <I.Login />
          Entrar
        </Link>
      </li>
    </ul>
  );
};

export default UserLinks;
