import React from "react";
import Header from "./header/header";
import { Nav } from "./nav/nav";

const UserDefaultLayout: React.FC = () => {
  return (
    <>
      <Header />
      <Nav.default_user />
    </>
  );
};

export default UserDefaultLayout;
