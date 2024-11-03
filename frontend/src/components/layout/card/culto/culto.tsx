import React from "react";
import "./styles.scss";

interface CultoCardProps {
  children?: React.ReactNode;
  title: string;
  created_at: string;
  className?: string;
  onClick?: () => void;
}

const CultoCard: React.FC<CultoCardProps> = ({
  children,
  title,
  created_at,
  className,
  onClick,
}: CultoCardProps) => {
  const cultoDate = new Date(created_at);

  return (
    <div className={`culto_card ${className}`} onClick={onClick}>
      <h3>{title}</h3>
      {created_at && (
        <article>
          <time dateTime={created_at}>{cultoDate.toLocaleDateString()}</time>
        </article>
      )}
      {children && children}
    </div>
  );
};

export default CultoCard;
