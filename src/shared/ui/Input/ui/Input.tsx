import React from "react";
import { InputProps } from "../types/types.ts";

export const Input: React.FC<InputProps> = (props) => {
  const {
    value = "",
    type = "text",
    className,
    name,
    id,
    ariaDescribedby,
    placeholder = "placeholder",
    handleChange,
  } = props;
  return (
    <input
      value={value}
      type={type}
      className={`form-control ${className}`}
      id={id}
      name={name}
      aria-describedby={ariaDescribedby}
      placeholder={placeholder}
      onChange={handleChange}
      required
    />
  );
};
