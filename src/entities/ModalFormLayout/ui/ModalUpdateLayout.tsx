import React from "react";

export interface ModalLayoutUpdatePros {
  content: any;
  handleChange(e: React.FormEvent): void;
}

export const ModalUpdateLayout: React.FC<ModalLayoutUpdatePros> = (props) => {
  const { content, handleChange } = props;
  const excluded = [
    "id",
    "educationId",
    "education",
    "addresses",
    "addressId",
    "password",
    "articlesId",
    "articles",
    "articlesId",
    "bachelor",
    "bachelorId",
    "faculty",
    "facultyId",
    "masterId",
  ];
  function renderFormInput() {
    return Object.entries(content)
      .filter(([key]) => !excluded.includes(key))
      .map(([key, value]) => (
        <div className="form-group mt-2" key={key}>
          <input
            type="text"
            id={key}
            name={key}
            value={content[key] || ""}
            onChange={handleChange}
            className="form-control"
          />
        </div>
      ));
  }

  const formContent =
    content && Object.entries(content).length > 0 ? (
      renderFormInput()
    ) : (
      <h4>Malumotlar qo'shilmagan</h4>
    );

  return <form className="row">{formContent}</form>;
};
