import React, { useState } from "react";
import { Input } from "../../../shared";
import { ModalLayoutFormProps } from "../types";

export const ModalFormLayout: React.FC<ModalLayoutFormProps> = (props) => {
  const { content } = props;
  const [formFields, setFormFields] = useState(
    content.reduce((acc, item) => {
      acc[item.fieldName] = item.value;
      return acc;
    }, {} as Record<string, string>)
  );

  const setFields = (fieldName: string, value: string) => {
    console.log("field: " + fieldName);
    console.log("value:" + value);
    setFormFields((prevFields) => ({
      ...prevFields,
      [fieldName]: value,
    }));
  };

  function renderFormInputs() {
    return content.map((item, index) => (
      <div className={"col-lg-4 my-1"} key={index}>
        <Input
          placeholder={item.placeholder}
          value={formFields[item.fieldName]}
          handleChange={(e) => setFields(item.fieldName, e.target.value)}
          className="form-control w-100"
        />
      </div>
    ));
  }

  return <div className="row">{renderFormInputs()}</div>;
};
