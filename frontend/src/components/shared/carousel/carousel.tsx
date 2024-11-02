"use client";

import React, { useState } from "react";
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
  const [slide, setSlide] = useState<number>(0);

  const nextSlide = () => {
    setSlide(slide === files.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? files.length - 1 : slide - 1);
  };

  return (
    <div className={`carousel ${className}`}>
      <I.ArrowLeft className="arrow arrow_left" onClick={prevSlide} />
      {files.map((file, i) => (
        <div
          className={
            slide === i ? "image_container" : "image_container slide_hidden"
          }
          key={file.id}
        >
          <Img
            src={file.data}
            alt={file.name}
            width={0}
            height={0}
            className="carousel_image"
          />
        </div>
      ))}
      <I.ArrowRight className="arrow arrow_right" onClick={nextSlide} />
      <span className="indicators">
        {files.map((file, i) => (
          <button
            key={i}
            onClick={() => {
              setSlide(i);
            }}
            className={
              slide === i ? "indicator" : "indicator indicator_inactive"
            }
          ></button>
        ))}
      </span>
    </div>
  );
};

export default Carousel;
