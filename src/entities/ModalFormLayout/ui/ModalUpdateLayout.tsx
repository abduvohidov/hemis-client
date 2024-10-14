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
    "address",
    "addressId",
    "password",
  ];
  function renderFormInput() {
    return Object.entries(content)
      .filter(([key]) => !excluded.includes(key))
      .map(([key, value]) => (
        <div className="form-group" key={key}>
          <input
            type="text"
            id={key}
            name={key}
            value={value}
            onChange={handleChange}
            className="form-control"
          />
        </div>
      ));
  }

  return <form className="row">{renderFormInput()}</form>;
};
