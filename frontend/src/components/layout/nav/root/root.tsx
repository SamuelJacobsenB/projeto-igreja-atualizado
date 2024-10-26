"use client";

import React, { useEffect, useState } from "react";
import "./styles.scss";

interface RootProps {
  children: React.ReactNode;
}

const Root: React.FC<RootProps> = ({ children }: RootProps) => {
  const [scrolled, setScrolled] = useState<boolean>(false);

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

  return <nav className={scrolled ? "fixed" : ""}>{children}</nav>;
};

export default Root;
