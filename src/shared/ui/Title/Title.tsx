import React from "react";
import "./index.css";

interface TitleProps {
  className?: string;
  children: string;
}

export const Title: React.FC<TitleProps> = (props) => (
  <h1 className={`${props.className}`}>{props.children}</h1>
);
