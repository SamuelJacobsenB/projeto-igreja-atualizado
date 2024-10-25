"use client";

import React, { useEffect } from "react";
import UserDefaultLayout from "@/components/layout/userDefaultLayout";
import { getBoletimSemanal } from "@/functions/getBoletimSemanal";

const Home = () => {
  useEffect(() => {
    console.log(getBoletimSemanal());
  }, []);

  return (
    <>
      <UserDefaultLayout />
    </>
  );
};

export default Home;
