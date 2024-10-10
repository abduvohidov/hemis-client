import React, { FC } from "react";
import "./profileInput.css";

export interface IProfiInput {
  name: string;
  type?: "text" | "number" | "password" | "email";
  disabled: boolean;
  placeholder: string;
  value?: string;
}

export const ProfileInput: FC<IProfiInput> = (props) => {
  const { name, type = "text", disabled, placeholder, value } = props;
  return (
    <div>
      <label className="fw-bold" htmlFor={name}>
        {placeholder}
      </label>
      <input
        name={name}
        type={type}
        disabled={disabled}
        value={value}
        className={`${disabled && "disabled-input"} form-control`}
      />
    </div>
  );
};
