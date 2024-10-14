import React from "react";
import { IMasterReponse } from "../../../shared";
import { inputType } from "../../FilterFormLayout/lib/inputType";
import { MastersModalContentProps } from "../../../shared/consts/modalContents/mastersModalContent";

export interface ModalLayoutFormProps {
  content: any;
  isUpdate: boolean;
  masters?: IMasterReponse[];
  handleChange(e: React.FormEvent): void;
}

export const ModalFormLayout: React.FC<ModalLayoutFormProps> = (props) => {
  const { content, masters, handleChange, isUpdate } = props;
  console.log(content);

  const mastersContent = masters?.map((master, index) => (
    <option key={index} value={master.id}>
      {master.firstName} {master.lastName}
    </option>
  ));
  // needs to be copiyed
  function renderFormInputs() {
    if (isUpdate && typeof content === "object") {
      return Object.keys(content).map((key, index) => (
        <div className="col-lg-4 my-1" key={index}>
          {inputType(
            { ...content[key], name: key, value: content[key] },
            key,
            handleChange
          )}
        </div>
      ));
    } else {
      return content.map((item: MastersModalContentProps, index) => (
        <div className="col-lg-4 my-1" key={index}>
          {inputType(item, item.name, handleChange)}
        </div>
      ));
    }
  }

  return (
    <form className="row">
      {masters && (
        <select
          defaultValue="Student tanlang"
          name="masterId"
          className="form-control mt-2 mb-2 mx-2"
          onChange={handleChange}
        >
          <option disabled>Student tanlang</option>
          {mastersContent}
        </select>
      )}
      {renderFormInputs()}
    </form>
  );
};
