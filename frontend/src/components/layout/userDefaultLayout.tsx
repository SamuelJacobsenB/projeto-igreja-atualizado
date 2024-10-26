import React from "react";
import Header from "./header/header";
import Profile from "@/components/layout/profile/profile";
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
      <Profile />
      <Nav.default_user />
      {children}
      <Footer />
    </>
  );
};

export default UserDefaultLayout;
