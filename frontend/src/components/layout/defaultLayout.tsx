import React from "react";
import Header from "./header/header";
import { Nav } from "./nav/nav";
import Footer from "./footer/footer";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({
  children,
}: DefaultLayoutProps) => {
  return (
    <>
      <Header />
      <Nav.default />
      {children}
      <Footer />
    </>
  );
};

export default DefaultLayout;
