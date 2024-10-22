"use client";

import { useMessage } from "@/contexts/message.context";
import React from "react";

const Home = () => {
  const { showMessage } = useMessage();
  return (
    <div>
      Home
      <button onClick={() => showMessage("jfneuergeger erg erg", "success")}>
        clijbwhegw
      </button>
    </div>
  );
};

export default Home;
