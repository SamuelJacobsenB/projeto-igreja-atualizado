import React from "react";
import I from "@/components/icons/icons";
import "./styles.scss";

const Social = () => {
  return (
    <section className="social">
      <article>
        <a
          href="https://www.instagram.com/pibsgp/"
          target="_blank"
          rel="noopener"
          className="instagram"
        >
          <I.Instagram />
        </a>
        <a
          href="https://www.facebook.com/pibsgp/"
          target="_blank"
          rel="noopener"
          className="facebook"
        >
          <I.Facebook />
        </a>
        <a
          href="https://www.youtube.com/@PIBSGP"
          target="_blank"
          rel="noopener"
          className="youtube"
        >
          <I.Youtube />
        </a>
      </article>
      <h1>@pibsgp</h1>
    </section>
  );
};

export default Social;
