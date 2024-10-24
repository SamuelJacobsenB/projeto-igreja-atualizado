"use client";

import React, { useState } from "react";
import I from "@/components/icons/icons";
import "./styles.scss";

interface MenuProps {
  children: React.ReactNode;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu: React.FC<MenuProps> = ({ children, setIsOpen }: MenuProps) => {
  return (
    <div className="menu_left">
      <div className="close" onClick={() => setIsOpen(false)}>
        <I.Close />
      </div>
      {children}
    </div>
  );
};

export default Menu;
