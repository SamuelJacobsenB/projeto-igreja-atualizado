import React from "react";
import "./styles.scss";

interface BoletimCardProps {
  title: string;
  created_at: string;
  className?: string;
  onClick?: () => void;
}

const Boletim: React.FC<BoletimCardProps> = ({
  title,
  created_at,
  className,
  onClick,
}: BoletimCardProps) => {
  const boletimDate = new Date(created_at);

  return (
    <div className={`boletim_card ${className}`} onClick={onClick}>
      <h3>{title}</h3>
      <article>
        <time dateTime={created_at}>{boletimDate.toLocaleDateString()}</time>
      </article>
    </div>
  );
};

export default Boletim;
