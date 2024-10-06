import "./FilterFormLayout.css";
import React, { FC, FormEventHandler } from "react";
import { Select } from "../../../shared";

export interface IFilterFormLayout {
  title: string;
  content: any[];
  submitForm: FormEventHandler<HTMLFormElement>;
  handleChange(e: React.FormEvent): void;
}

// Helper to sanitize titles for valid ID
const sanitizeTitle = (title: string) => {
  return title.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase();
};

export const FilterFormLayout: FC<IFilterFormLayout> = (props) => {
  const { title, content, submitForm, handleChange } = props;
  const sanitizedTitle = sanitizeTitle(title);

  const formContent = content.map((field, index) => {
    if (field.type === "select") {
      return (
        <div key={index} className="select-wrapper">
          <label className="fw-bold" htmlFor={field.name}>
            {field.placeholder}
          </label>
          <Select
            field={field}
            handleChange={handleChange}
            value={field.value}
          />
        </div>
      );
    } else {
      return (
        <div key={index} className="input-wrapper">
          <label className="fw-bold" htmlFor={field.name}>
            {field.placeholder}
          </label>
          <input
            className="form-control"
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            onChange={handleChange}
          />
        </div>
      );
    }
  });

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={`heading-${sanitizedTitle}`}>
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse-${sanitizedTitle}`}
          aria-expanded="false"
          aria-controls={`collapse-${sanitizedTitle}`}
        >
          {title}
        </button>
      </h2>
      <div
        id={`collapse-${sanitizedTitle}`}
        className="accordion-collapse collapse"
        aria-labelledby={`heading-${sanitizedTitle}`}
        data-bs-parent="#filterAccordion"
      >
        <div className="accordion-body">
          <form action="#" className="form" onSubmit={submitForm}>
            {formContent}
          </form>
        </div>
      </div>
    </div>
  );
};
