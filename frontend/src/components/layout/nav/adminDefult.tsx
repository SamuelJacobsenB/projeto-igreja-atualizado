import React from "react";
import { Nav } from "./nav";

const AdminDefault: React.FC = () => {
  return (
    <Nav.root>
      <Nav.admin_menu />
    </Nav.root>
  );
};

export default AdminDefault;
