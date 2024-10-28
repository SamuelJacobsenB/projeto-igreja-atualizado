"use client";

import React from "react";
import { useParams } from "next/navigation";
import { useOneBoletim } from "@/hooks/useOneBoletim";
import UserDefaultLayout from "@/components/layout/userDefaultLayout";
import LoadPage from "@/components/layout/loadPage/loadPage";
import Container from "@/components/shared/container/container";
import Topic from "@/components/shared/topic/topic";
import "./styles.scss";

const BoletimInfo: React.FC = () => {
  const { id }: { id: string } = useParams();
  const { boletim, loading, error } = useOneBoletim(id);

  if (loading) {
    return <LoadPage />;
  }

  console.log(id);

  return (
    <UserDefaultLayout>
      <div className="boletim_info page">
        {boletim && (
          <Container className="boletim">
            <Topic>Pastoral</Topic>
            <h1>{boletim.title}</h1>
            <hr />
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: boletim.content }}
            />
            <div className="about">
              <small>{boletim.author}</small>
              <time dateTime={boletim.created_at}>
                {new Date(boletim.created_at).toLocaleDateString()}
              </time>
            </div>
          </Container>
        )}
      </div>
    </UserDefaultLayout>
  );
};

export default BoletimInfo;
