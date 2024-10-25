import React from "react";
import Link from "next/link";
import I from "@/components/icons/icons";
import "./styles.scss";

const UserLinks: React.FC = () => {
  return (
    <ul>
      <li>
        <Link href={"/"}>
          <I.Home />
          Principal
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
        <Link href={"/login"}>
          <I.Person />
          Login
        </Link>
      </li>
    </ul>
  );
};

export default UserLinks;
