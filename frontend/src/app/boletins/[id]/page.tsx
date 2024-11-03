"use client";

import React from "react";
import { useParams } from "next/navigation";
import { useOneBoletim } from "@/hooks/useOneBoletim";
import DefaultLayout from "@/components/layout/defaultLayout";
import LoadPage from "@/components/layout/loadPage/loadPage";
import Container from "@/components/shared/container/container";
import Topic from "@/components/shared/topic/topic";
import "./styles.scss";
import Social from "@/components/layout/social/social";

const BoletimInfo: React.FC = () => {
  const { id }: { id: string } = useParams();
  const { boletim, loading, error } = useOneBoletim(id);

  if (loading) {
    return <LoadPage />;
  }
  return (
    <DefaultLayout>
      <div className="boletim_informations page">
        {boletim && (
          <Container className="boletim_content">
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
        <Social />
      </div>
    </DefaultLayout>
  );
};

export default BoletimInfo;
