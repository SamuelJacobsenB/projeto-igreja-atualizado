import React from "react";
import TextAreaBtn from "./btn";

interface DefaultBtnAreaProps {
  setValue: React.Dispatch<React.SetStateAction<string>>;
  value: string;
}

const DefaultBtnArea: React.FC<DefaultBtnAreaProps> = ({
  setValue,
  value,
}: DefaultBtnAreaProps) => {
  const handleAddTag = (tag: string) => {
    setValue(`${value} <${tag}></${tag}>`);
  };

  const handleAddLink = (target?: boolean) => {
    setValue(
      `${value} <a href="" ${
        target ? "target='_blank'" : ""
      } rel="noopener"></a>`
    );
  };

  const handleAddBr = () => {
    setValue(`${value} <br />`);
  };

  return (
    <>
      <TextAreaBtn onClick={() => handleAddTag("p")}>Parágrafo</TextAreaBtn>
      <TextAreaBtn onClick={() => handleAddTag("b")}>Negrito</TextAreaBtn>
      <TextAreaBtn onClick={() => handleAddTag("i")}>Itálico</TextAreaBtn>
      <TextAreaBtn onClick={() => handleAddLink()}>Link interno</TextAreaBtn>
      <TextAreaBtn onClick={() => handleAddLink(true)}>
        Link externo
      </TextAreaBtn>
      <TextAreaBtn onClick={() => handleAddBr()}>Quebra de linha</TextAreaBtn>
    </>
  );
};

export default DefaultBtnArea;
