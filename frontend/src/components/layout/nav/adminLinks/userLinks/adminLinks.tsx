import React from "react";
import Link from "next/link";
import I from "@/components/icons/icons";
import "./styles.scss";

const AdminLinks: React.FC = () => {
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
        <Link href={"/admin/avisos"}>
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
    </ul>
  );
};

export default AdminLinks;
