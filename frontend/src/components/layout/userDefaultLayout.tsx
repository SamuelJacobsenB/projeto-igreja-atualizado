import React from "react";
import Header from "./header/header";
import { Nav } from "./nav/nav";
import Footer from "./footer/footer";

interface UserDefaultLayoutProps {
  children: React.ReactNode;
}

const UserDefaultLayout: React.FC<UserDefaultLayoutProps> = ({
  children,
}: UserDefaultLayoutProps) => {
  return (
    <>
      <Header />
      <Nav.default_user />
      {children}
      <Footer />
    </>
  );
};

export default UserDefaultLayout;
