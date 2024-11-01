"use client";

import React from "react";
import { useUser } from "@/contexts/user.context";
import Link from "next/link";
import Dropdown from "../dropdown/dropdown";
import { links } from "@/constants/links";
import "./styles.scss";

const NavLinks: React.FC = () => {
  const { role } = useUser();

  return (
    <ul>
      {links.map((item: any, i: number) => {
        if (item.type === "link") {
          if (item.admin === true) {
            return (
              <li
                key={i}
                style={{ display: role === "ADMIN" ? "flex" : "none" }}
              >
                <Link href={item.path}>
                  <item.icon />
                  {item.name}
                </Link>
              </li>
            );
          } else {
            return (
              <li key={i}>
                <Link href={item.path}>
                  <item.icon />
                  {item.name}
                </Link>
              </li>
            );
          }
        } else {
          if (item.admin === true) {
            return (
              <li
                key={i}
                className="drop_li"
                style={{ display: role === "ADMIN" ? "flex" : "none" }}
              >
                <Dropdown submenu={item} />
              </li>
            );
          } else {
            return (
              <li key={i} className="drop_li">
                <Dropdown submenu={item} />
              </li>
            );
          }
        }
      })}
    </ul>
  );
};

export default NavLinks;
