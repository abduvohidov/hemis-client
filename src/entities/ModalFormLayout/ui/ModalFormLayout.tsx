import React from "react";
import { Input } from "../../../shared";
import { ModalLayoutFormProps } from "../types";

export const ModalFormLayout: React.FC<ModalLayoutFormProps> = (props) => {
  const { content, handleChange } = props;

  function renderFormInputs() {
    return content.map((item, index) => (
      <div className={"col-lg-4 my-1"} key={index}>
        <input
          placeholder={item.placeholder}
          name={item.fieldName}
          onChange={handleChange}
          className="form-control w-100"
        />
      </div>
    ));
  }

  return <form className="row">{renderFormInputs()}</form>;
};
