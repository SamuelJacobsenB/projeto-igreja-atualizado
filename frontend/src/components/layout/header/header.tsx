import React from "react";
import Img from "./../../shared/img/img";
import "./styles.scss";

const Header: React.FC = () => {
  return (
    <header>
      <Img src="/imgs/logo.png" alt="logo PIBSGP" width={160} height={150} />
    </header>
  );
};

export default Header;
