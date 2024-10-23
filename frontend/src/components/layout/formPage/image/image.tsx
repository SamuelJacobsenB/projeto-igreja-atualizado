"use client";

import React from "react";
import Img from "@/components/shared/img/img";
import "./styles.scss";

const FormImage = () => {
  return (
    <div className="form_image_area">
      <Img src="/imgs/logo-white.png" alt="logo" width={200} height={180} />
    </div>
  );
};

export default FormImage;
