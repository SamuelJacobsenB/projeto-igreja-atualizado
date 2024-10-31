"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/contexts/user.context";
import { useModal } from "@/contexts/modal.context";
import I from "@/components/icons/icons";
import "./styles.scss";

const Profile: React.FC = () => {
  const router = useRouter();
  const { name, getUser } = useUser();
  const { showModal } = useModal();

  const handleClick = () => {
    if (!name) {
      router.push("/login");
    }
  };

  const handleLogout = () => {
    showModal("Você deseja sair de sua conta?", async () => {
      localStorage.removeItem("token");
      await getUser();
    });
  };

  return (
    <div className="profile" onClick={handleClick}>
      {name ? (
        <div className="logged">
          <h2>{name.at(0)?.toUpperCase()}</h2>{" "}
          <p onClick={handleLogout}>Sair</p>
        </div>
      ) : (
        <div className="not_logged">
          <h2>
            <I.Person />
          </h2>
          <p>Entrar</p>
        </div>
      )}
    </div>
  );
};

export default Profile;
