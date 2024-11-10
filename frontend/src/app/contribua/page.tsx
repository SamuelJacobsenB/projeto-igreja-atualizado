import React from "react";
import DefaultLayout from "@/components/layout/defaultLayout";
import Img from "@/components/shared/img/img";
import "./styles.scss";

const Contribua: React.FC = () => {
  return (
    <DefaultLayout>
      <div className="contribua page">
        <h1>Contribua com um dos meios abaixo:</h1>
        <hr />

        <div className="contribua_box">
          <div>
            <Img
              src="/imgs/contribua/banco-do-brasil.png"
              alt="Banco do Brasil"
              width={1000}
              height={700}
              className="contribua_image banco_do_brasil"
            />
            <p>
              Ag.: 0806-0 <br /> C/C: 5.320-1
            </p>
          </div>
          <div>
            <Img
              src="/imgs/contribua/pix.png"
              alt="Pix"
              width={1000}
              height={1000}
              className="contribua_image pix"
            />
            <p>
              PIX <br /> CNPJ: 28.570.950/0001-70
            </p>
          </div>
          <div>
            <Img
              src="/imgs/contribua/sicoob.png"
              alt="Sicoob"
              width={1000}
              height={1000}
              className="contribua_image sicoob"
            />
            <p>
              Ag.: 3007 <br /> C/C: 339463-8
            </p>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Contribua;
