"use client";

import React, { useState } from "react";
import I from "@/components/icons/icons";
import SideBar from "../../sidebar/sidebar";
import NavLinks from "../navLinks/navLinks";
import Profile from "../../profile/profile";
import "./styles.scss";

const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToogleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="menu">
        <NavLinks className="menu_nav_links" />
        <I.Menu className="burguer" onClick={handleToogleMenu} />
        <Profile />
      </div>
      {isOpen && (
        <SideBar setIsOpen={setIsOpen} className="menu_side_bar">
          <NavLinks />
        </SideBar>
      )}
    </>
  );
};

export default Menu;
