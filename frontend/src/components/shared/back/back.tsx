import React from "react";
import Link from "next/link";
import "./styles.scss";
import I from "@/components/icons/icons";

interface BackProps {
  url: string;
}

const Back: React.FC<BackProps> = ({ url }: BackProps) => {
  return (
    <div className="back">
      <Link href={url}>
        <I.ArrowBack />
      </Link>
    </div>
  );
};

export default Back;
