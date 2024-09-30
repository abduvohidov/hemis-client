import React from "react";
import { InputProps } from "../types/types";

export const Input: React.FC<InputProps> = (props) => {
  const {
    value ,
    type = "text",
    className,
    id,
    ariaDescribedby,
    placeholder = "placeholder",
    handleChange
  } = props;
  return (
    <input
    value={value}
      type={type}
      className={`form-control ${className}`}
      id={id}
      aria-describedby={ariaDescribedby}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};
