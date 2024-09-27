import React from "react";

interface IInput {
  placeholder: string;
  type?: string;
  value?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: () => void;
}

export const Input: React.FC<IInput> = (props) => {
  const {
    placeholder,
    type = "text",
    value,
    onChange,
    onKeyDown,
    className = 'form-control w-25',
  } = props;
  return (
    <input
      type={type}
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
};
