"use client";

import React from "react";
import { useParams } from "next/navigation";
import { useOneCulto } from "@/hooks/useOneCulto";
import DefaultLayout from "@/components/layout/defaultLayout";
import LoadPage from "@/components/layout/loadPage/loadPage";
import Container from "@/components/shared/container/container";
import Social from "@/components/layout/social/social";
import "./styles.scss";

const CultoInfo: React.FC = () => {
  const { id }: { id: string } = useParams();
  const { culto, loading, error } = useOneCulto(id);

  if (loading) {
    return <LoadPage />;
  }
  return (
    <DefaultLayout>
      <div className="culto_info page">
        {culto && (
          <Container className="culto">
            <h1>{culto.title}</h1>
            <hr />
            <div
              className="culto_video"
              dangerouslySetInnerHTML={{ __html: culto.video }}
            />
            <div
              className="description"
              dangerouslySetInnerHTML={{ __html: culto.description }}
            />
            <div className="about">
              <small>Pregador: {culto.pregador}</small>
              <time dateTime={culto.created_at}>
                {new Date(culto.created_at).toLocaleDateString()}
              </time>
            </div>
          </Container>
        )}
        <Social />
      </div>
    </DefaultLayout>
  );
};

export default CultoInfo;
