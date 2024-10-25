import React from "react";
import Loader from "@/components/shared/loader/loader";
import "./styles.scss";

const LoadPage: React.FC = () => {
  return (
    <div className="load_page">
      <Loader />
    </div>
  );
};

export default LoadPage;
