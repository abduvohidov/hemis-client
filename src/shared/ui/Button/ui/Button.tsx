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
    closeModal,
    toggleMasterModal,
    targetMasterModal,
    disabled,
  } = props;
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        onChange={onChange}
        data-bs-dismiss={closeModal}
        data-bs-toggle={toggleMasterModal}
        data-bs-target={targetMasterModal}
        className={`btn btn-${color} ${className}`}
      >
        {children}
      </button>
    </>
  );
};
