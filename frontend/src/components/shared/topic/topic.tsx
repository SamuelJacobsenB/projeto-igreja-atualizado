import React from "react";
import "./styles.scss";

interface TopicProps {
  children: React.ReactNode;
}

const Topic: React.FC<TopicProps> = ({ children }: TopicProps) => {
  return <div className="topic">{children}</div>;
};

export default Topic;
