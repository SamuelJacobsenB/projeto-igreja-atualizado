import React from "react";
import { File } from "@/types/file.type";
import Img from "../img/img";
import I from "@/components/icons/icons";
import "./styles.scss";

interface CarouselProps {
  files: File[];
  className?: string;
}

const Carousel: React.FC<CarouselProps> = ({
  files,
  className,
}: CarouselProps) => {
  return (
    <div className={`carousel ${className}`}>
      <I.ArrowBack />
      {files.map((file) => (
        <div className="image_container" key={file.id}>
          <Img
            src={file.data}
            alt={file.name}
            width={0}
            height={0}
            className="slide"
          />
        </div>
      ))}
      <I.ArrowRight />
    </div>
  );
};

export default Carousel;
