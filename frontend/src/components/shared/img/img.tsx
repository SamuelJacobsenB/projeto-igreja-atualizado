"use client";

import React, { useState } from "react";
import Image from "next/image";
import "./styles.scss";

interface ImgProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const Img: React.FC<ImgProps> = ({ src, alt, width, height }: ImgProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      onLoad={() => setIsLoading(false)}
      className={isLoading ? "blur" : ""}
    />
  );
};

export default Img;
