"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import I from "@/components/icons/icons";
import "./styles.scss";

interface DropdownProps {
  submenu: any;
  className?: string;
}

const Dropdown: React.FC<DropdownProps> = ({ submenu, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 150) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="dropdown">
      <button className="dropdown_button" onClick={toggleDropdown}>
        <submenu.icon /> {submenu.name}
        {isOpen ? <I.ArrowDown /> : <I.ArrowUp />}
      </button>
      {isOpen && (
        <ul className={`dropdown_menu ${className} ${scrolled ? "fixed" : ""}`}>
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
