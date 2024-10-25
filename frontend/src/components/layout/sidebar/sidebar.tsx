"use client";

import React from "react";
import I from "@/components/icons/icons";
import "./styles.scss";

interface SideBarProps {
  children: React.ReactNode;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideBar: React.FC<SideBarProps> = ({
  children,
  setIsOpen,
}: SideBarProps) => {
  return (
    <div className="side_bar">
      <div className="close" onClick={() => setIsOpen(false)}>
        <I.Close />
      </div>
      {children}
    </div>
  );
};

export default SideBar;
