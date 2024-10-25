import React from "react";
import { useBoletins } from "@/hooks/useBoletins";
import UserDefaultLayout from "@/components/layout/userDefaultLayout";
import { getBoletimSemanal } from "@/functions/getBoletimSemanal";

const Home: React.FC = () => {
  const { boletins, loading } = useBoletins();
  const boletim = getBoletimSemanal(boletins);

  if (loading) {
    return;
  }

  return (
    <>
      <UserDefaultLayout />
      <div className="home">
        {boletim ? (
          <div className="boletim">
            <h1>{boletim.title}</h1>
            {boletim.content}
            <small>{boletim.author}</small>
          </div>
        ) : (
          <h1>Nenhum boletim cadastrado esta semana</h1>
        )}
      </div>
    </>
  );
};

export default Home;
