"use client";

import React, { useState } from "react";
import "./styles.scss";
import I from "@/components/icons/icons";
import SideBar from "../../sidebar/sidebar";
import UserLinks from "../userLinks/userLinks";
import Profile from "../../profile/profile";

const UserMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToogleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="menu">
        <I.Menu className="burguer" onClick={handleToogleMenu} />
        <Profile />
      </div>
      {isOpen && (
        <SideBar setIsOpen={setIsOpen}>
          <UserLinks />
        </SideBar>
      )}
    </>
  );
};

export default UserMenu;
