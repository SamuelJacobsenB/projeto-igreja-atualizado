import React from "react";
import { Nav } from "./nav";

const UserDefault: React.FC = () => {
  return (
    <Nav.root>
      <Nav.user_links />
    </Nav.root>
  );
};

export default UserDefault;
