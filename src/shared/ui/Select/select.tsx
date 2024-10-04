import React, { FC } from "react";

export interface ISelect {
  readonly field: any;
  readonly className?: string;
}

export const Select: FC<ISelect> = (props) => {
  const { field, className } = props;
  return (
    <select
      className={`form-select ${className}`}
      name={field.name}
      value={field.value}
    >
      <option selected disabled>
        Tanlang
      </option>
      {field.options.map((option: string, index: number) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
