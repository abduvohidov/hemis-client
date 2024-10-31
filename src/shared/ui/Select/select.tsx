import React, { FC } from "react";

export interface ISelect {
  field: any;
  className?: string;
  handleChange(e: React.ChangeEvent<HTMLSelectElement>): void;
  defaultValue?: string;
  value?: string;
}

export const Select: FC<ISelect> = (props) => {
  const { field, className, handleChange, value, defaultValue } = props;

  return (
    <select
      name={field.name}
      onChange={handleChange}
      className={`form-select ${className}`}
      defaultValue={defaultValue || "Tanlang"}
    >
      <option disabled>{defaultValue || "Tanlang"}</option>
      {field.options.map((option: string, index: number) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
