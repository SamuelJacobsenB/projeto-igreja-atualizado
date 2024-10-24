"use client";

import React, { useState } from "react";
import Link from "next/link";
import I from "@/components/icons/icons";
import "./styles.scss";
import Menu from "../../menu/menu";

const UserLinks: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToogleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="menu" onClick={handleToogleMenu}>
        <I.Menu />
      </div>
      {isOpen && (
        <Menu setIsOpen={setIsOpen}>
          <ul style={{ display: isOpen ? "flex" : "none" }}>
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
              <Link href={"/ajude"}>
                <I.Add />
                Ajude
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
        </Menu>
      )}
    </>
  );
};

export default UserLinks;
