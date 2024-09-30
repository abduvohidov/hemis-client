import React from "react";
import { InputProps } from "../types/types";

export const Input: React.FC<InputProps> = (props) => {
  const {
    type = "text",
    className,
    id,
    ariaDescribedby,
    placeholder = "placeholder",
  } = props;
  return (
    <input
      type={type}
      className={`form-control ${className}`}
      id={id}
      aria-describedby={ariaDescribedby}
      placeholder={placeholder}
    />
  );
};
