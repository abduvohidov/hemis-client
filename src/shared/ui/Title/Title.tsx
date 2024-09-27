import React from "react";
import "./Title.css";

interface ITitle {
  title: string;
  spanText: string;
}

export const Title: React.FC<ITitle> = (props) => {
  const { title, spanText } = props;

  return (
    <h1 className="title mt-4">
      {title}
      <span>{spanText}</span>
    </h1>
  );
};
