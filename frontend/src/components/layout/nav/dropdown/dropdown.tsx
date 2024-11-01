"use client";

import React, { useState } from "react";
import Link from "next/link";
import I from "@/components/icons/icons";
import "./styles.scss";

interface DropdownProps {
  submenu: any;
}

const Dropdown: React.FC<DropdownProps> = ({ submenu }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className="dropdown_button" onClick={toggleDropdown}>
        <submenu.icon /> {submenu.name}
        {isOpen ? <I.ArrowDown /> : <I.ArrowUp />}
      </button>
      {isOpen && (
        <ul className="dropdown_menu">
          {submenu.children.map((item: any, i: number) => {
            if (item.type === "link") {
              return (
                <li key={i}>
                  <Link
                    href={
                      item.admin === true
                        ? `/admin/${submenu.path}/${item.path}`
                        : `${submenu.path}/${item.path}`
                    }
                  >
                    <item.icon />
                    {item.name}
                  </Link>
                </li>
              );
            } else {
              return (
                <li key={i} className="drop_li">
                  <Dropdown submenu={item} />
                </li>
              );
            }
          })}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
