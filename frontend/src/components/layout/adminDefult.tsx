import React from "react";
import Header from "./header/header";
import { Nav } from "./nav/nav";
import Footer from "./footer/footer";

interface AdminDefaultLayoutProps {
  children: React.ReactNode;
}

const AdminDefaultLayout: React.FC<AdminDefaultLayoutProps> = ({
  children,
}: AdminDefaultLayoutProps) => {
  return (
    <>
      <Header />
      <Nav.default_admin />
      {children}
      <Footer />
    </>
  );
};

export default AdminDefaultLayout;
