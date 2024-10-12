import React from "react";
import InputMask from "react-input-mask";

export const DateInput = ({
  value,
  onChange,
  name,
  placeholder = "yil-oy-kun",
  disabled = false,
}) => {
  return (
    <InputMask
      mask="9999-99-99"
      placeholder={placeholder}
      maskChar="_"
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
  );
};
