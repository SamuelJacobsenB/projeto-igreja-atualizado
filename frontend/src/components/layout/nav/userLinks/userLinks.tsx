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
              <Link href={"/"}>Principal</Link>
            </li>
            <li>
              <Link href={"/cultos"}>Cultos</Link>
            </li>
            <li>
              <Link href={"/avisos"}>Avisos</Link>
            </li>
            <li>
              <Link href={"/ajude"}>Ajude</Link>
            </li>
            <li>
              <Link href={"/contato"}>Contato</Link>
            </li>
            <li>
              <Link href={"/login"}>Login</Link>
            </li>
          </ul>
        </Menu>
      )}
    </>
  );
};

export default UserLinks;
