"use client";

import React from "react";
import UserDefaultLayout from "@/components/layout/userDefaultLayout";
import { useBoletins } from "@/hooks/useBoletins";
import LoadPage from "@/components/layout/loadPage/loadPage";

const Home: React.FC = () => {
  const { boletins, loading, error } = useBoletins();

  if (loading) {
    return <LoadPage />;
  }

  return (
    <>
      <UserDefaultLayout />
    </>
  );
};

export default Home;
