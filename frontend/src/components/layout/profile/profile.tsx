"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/contexts/user.context";
import I from "@/components/icons/icons";
import "./styles.scss";

const Profile: React.FC = () => {
  const router = useRouter();
  const { name } = useUser();

  const handleClick = () => {
    if (!name) {
      router.push("/login");
    }
  };

  return (
    <div className="profile_area">
      <div className="profile" onClick={handleClick}>
        {name ? name.at(0)?.toUpperCase() : <I.Person />}
      </div>
    </div>
  );
};

export default Profile;
