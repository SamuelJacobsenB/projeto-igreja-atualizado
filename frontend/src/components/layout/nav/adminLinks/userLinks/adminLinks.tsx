"use client";

import React from "react";
import { useUser } from "@/contexts/user.context";
import Link from "next/link";
import I from "@/components/icons/icons";
import "./styles.scss";

const AdminLinks: React.FC = () => {
  const user = useUser();

  return (
    <ul>
      <li>
        <Link href={"/"}>
          <I.Home />
          Principal
        </Link>
      </li>
      <li>
        <Link href={"/admin/boletins"}>
          <I.Paper />
          Modificar boletins
        </Link>
      </li>
      <li>
        <Link href={"/admin/uploads"}>
          <I.Image />
          Modificar arquivos
        </Link>
      </li>
      <li>
        <Link href={"/admin/warnings"}>
          <I.Warning />
          Modificar avisos
        </Link>
      </li>
      <li>
        <Link href={"/login"}>
          <I.Login />
          Entrar
        </Link>
      </li>
      <li className="logout" style={{ display: user ? "flex" : "none" }}>
        <I.Logout />
        Sair
      </li>
    </ul>
  );
};

export default AdminLinks;
