import React from "react";
import I from "@/components/icons/icons";
import "./styles.scss";

interface WarningCardProps {
  title: string;
  content: string;
}

const WarningCard: React.FC<WarningCardProps> = ({
  title,
  content,
}: WarningCardProps) => {
  return (
    <div className="warning_card">
      <h3>
        <I.Warning /> {title}
      </h3>
      <div
        className="warning_content"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default WarningCard;
