"use client";

import React from "react";
import I from "@/components/icons/icons";
import "./styles.scss";

interface SideBarProps {
  children: React.ReactNode;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
}

const SideBar: React.FC<SideBarProps> = ({
  children,
  setIsOpen,
  className,
}: SideBarProps) => {
  return (
    <div className={`side_bar ${className}`}>
      <div className="close" onClick={() => setIsOpen(false)}>
        <I.Close />
      </div>
      <div className="side_content">{children}</div>
    </div>
  );
};

export default SideBar;
