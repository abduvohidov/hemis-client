import React from "react";
import { LabelProps } from "../types/type";

export const Label: React.FC<LabelProps> = (props) => {
  const { children = "Label", htmlFor, className } = props;
  return (
    <label htmlFor={htmlFor} className={`form-label ${className}`}>
      {children}
    </label>
  );
};
