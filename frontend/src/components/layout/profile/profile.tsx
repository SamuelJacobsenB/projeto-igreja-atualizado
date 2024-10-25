"use client";

import React from "react";
import { useUser } from "@/contexts/user.context";
import I from "@/components/icons/icons";
import "./styles.scss";

const Profile: React.FC = () => {
  const { name } = useUser();

  return (
    <div className="profile_area">
      <div className="profile">
        {name ? name.at(0)?.toUpperCase() : <I.Person />}
      </div>
    </div>
  );
};

export default Profile;
