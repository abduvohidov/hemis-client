import React, { FC } from "react";

export interface ISelect {
  field: any;
  className?: string;
  handleChange(e: React.ChangeEvent<HTMLSelectElement>): void;
  value: string;
}

export const Select: FC<ISelect> = (props) => {
  const { field, className, handleChange, value } = props;

  return (
    <select
      className={`form-select ${className}`}
      name={field.name}
      onChange={handleChange}
      defaultValue="Tanlang"
    >
      <option disabled>Tanlang</option>
      {field.options.map((option: string, index: number) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
