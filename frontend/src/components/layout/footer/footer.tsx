import React from "react";
import "./styles.scss";
import Social from "../social/social";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="location">
        <h3>Localização:</h3>
        <p>
          Av. Graciano Neves, 69 - Centro - São Gabriel da Palha/ES <br /> (ao
          lado do Banco do Brasil)
        </p>
      </div>
      <div className="social_media">
        <Social />
      </div>
      <div className="contact">
        <h3>Contato:</h3>
        <p>
          Celular: 98891-2756
          <div>
            <div></div>
            ou
            <div></div>
          </div>
          E-mail: pibsgp@yahoo.com.br
        </p>
      </div>
    </footer>
  );
};

export default Footer;
