"use client";

import React, { useState } from "react";
import Image from "next/image";
import "./styles.scss";

interface ImgProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  layout?: string;
  className?: string;
}

const Img: React.FC<ImgProps> = ({
  src,
  alt,
  width,
  height,
  layout,
  className,
}: ImgProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      layout={layout}
      onLoad={() => setIsLoading(false)}
      className={isLoading ? `blur ${className}` : `${className}`}
    />
  );
};

export default Img;
