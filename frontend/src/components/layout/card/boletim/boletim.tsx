import React from "react";
import "./styles.scss";

interface BoletimCardProps {
  children?: React.ReactNode;
  title: string;
  created_at: string;
  className?: string;
  onClick?: () => void;
}

const BoletimCard: React.FC<BoletimCardProps> = ({
  children,
  title,
  created_at,
  className,
  onClick,
}: BoletimCardProps) => {
  const boletimDate = new Date(created_at);

  return (
    <div className={`boletim_card ${className}`} onClick={onClick}>
      <h3>{title}</h3>
      {created_at && (
        <article>
          <time dateTime={created_at}>{boletimDate.toLocaleDateString()}</time>
        </article>
      )}
      {children && children}
    </div>
  );
};

export default BoletimCard;
