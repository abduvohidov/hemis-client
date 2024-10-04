import React from "react";
import { ButtonProps } from "../types/type";

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    children = "button",
    className,
    color = "primary",
    type = "button",
    onChange,
    onClick,
    toggleModal,
    targetModal
  } = props;
  return (
    <>
      <button
        type={type}
        className={`btn btn-${color} ${className}`}
        onChange={onChange}
        onClick={onClick}
        data-bs-toggle={toggleModal}
        data-bs-target={targetModal}
      >
        {children}
      </button>
    </>
  );
};
