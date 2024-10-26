import React from "react";
import "./styles.scss";

interface TopicProps {
  children: React.ReactNode;
  type: "top" | "bottom";
}

const Topic: React.FC<TopicProps> = ({ children, type }: TopicProps) => {
  return <div className={`topic ${type}`}>{children}</div>;
};

export default Topic;
