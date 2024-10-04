import "./FilterFormLayout.scss";
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
        <div key={index}>
          <label htmlFor={field.name}>{field.placeholder}</label>
          <select name={field.name} value={field.value}>
            <option value={field.name}> Tanla</option>
            {field.options.map((option: string, index: number) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      );
    } else {
      return (
        <div key={index}>
          <label htmlFor={field.name}>{field.placeholder}</label>
          <input
            type={field.type}
            name={field.name}
            value={field.value}
            placeholder={field.placeholder}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
      );
    }
  });

  return (
    <div>
      <h3>{title}</h3>
      <form action="#" onSubmit={submitForm}>
        {formContent}
        <button type="submit">Qidirish</button>
      </form>
    </div>
  );
};
