"use client";

import React, { useState } from "react";
import I from "@/components/icons/icons";
import SideBar from "../../../sidebar/sidebar";
import AdminLinks from "../../adminLinks/userLinks/adminLinks";
import Profile from "../../../profile/profile";
import "./styles.scss";
import Dropdown from "../../dropdown/dropdown";

const AdminMenu: React.FC = () => {
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
          <AdminLinks />
        </SideBar>
      )}
    </>
  );
};

export default AdminMenu;
