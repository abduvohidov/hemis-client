import "./FilterFormLayout.css";
import { Select } from "../../../shared";
import { Input } from "../../../shared/ui/Input";
import React, { FC, FormEventHandler } from "react";

export interface IFilterFormLayout {
  readonly title: string;
  readonly content: any[];
  readonly submitForm: FormEventHandler<HTMLFormElement>;
  handleChange(e: React.FormEvent): void;
}

export const FilterFormLayout: FC<IFilterFormLayout> = (props) => {
  const { title, content, submitForm, handleChange } = props;

  const formContent = content.map((field, index) => {
    if (field.type === "select") {
      return (
        <div key={index} className="select-wrapper">
          <label htmlFor={field.name}>{field.placeholder}</label>
          <Select field={field} />
        </div>
      );
    } else {
      return (
        <div key={index} className="input-wrapper">
          <label className="fw-bold" htmlFor={field.name}>{field.placeholder}</label>
          <Input
            type={field.type}
            value={field.value}
            placeholder={field.placeholder}
            handleChange={handleChange}
          />
        </div>
      );
    }
  });

  return (
    <div>
      <h3>{title}</h3>
      <form action="#" className="form" onSubmit={submitForm}>
        {formContent}
        <button type="submit">Qidirish</button>
      </form>
    </div>
  );
};
