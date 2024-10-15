import React, { FC } from "react";
import "./profileInput.css";
import InputMask from "react-input-mask";

export interface IProfileInput {
  name: string;
  type?: "text" | "number" | "password" | "email";
  disabled: boolean;
  placeholder?: string;
  value?: string;
  isPhoneInput?: boolean;
  isPlaceholder?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ProfileInput: FC<IProfileInput> = (props) => {
  const {
    name,
    type = "text",
    disabled,
    placeholder,
    value,
    isPhoneInput = false,
    isPlaceholder = true,
    onChange,
  } = props;

  const input = isPhoneInput ? (
    <InputMask
      mask="+\9\98 99 999 99 99"
      placeholder={placeholder || value}
      maskChar="_"
      value={value}
      onChange={onChange}
      disabled={disabled}
    >
      {(inputProps) => (
        <input
          {...inputProps}
          name={name}
          type="text"
          className="form-control"
        />
      )}
    </InputMask>
  ) : (
    <input
      name={name}
      type={type}
      disabled={disabled}
      value={value}
      onChange={onChange}
      className="form-control"
    />
  );

  return (
    <div>
      {isPlaceholder && (
        <label className="fw-bold" htmlFor={name}>
          {placeholder}
        </label>
      )}
      {input}
    </div>
  );
};
