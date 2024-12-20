import React from "react";
import { IMasterReponse } from "../../../shared";
import { inputType } from "../../FilterFormLayout/lib/inputType";
import { MastersModalContentProps } from "../../../shared/consts/modalContents/mastersModalContent";

export interface ModalLayoutFormProps {
  content: any;
  masters?: IMasterReponse[];
  handleChange(e: React.FormEvent): void;
}

export const ModalFormLayout: React.FC<ModalLayoutFormProps> = (props) => {
  const { content, masters, handleChange } = props;

  const mastersContent = masters?.map((master, index) => (
    <option key={index} value={master.id}>
      {master.firstName} {master.lastName}
    </option>
  ));
  function renderFormInputs() {
    return content.map((item: MastersModalContentProps, index) => (
      <div className={`col-lg-${item.col} my-1`} key={index}>
        {inputType(item, item.name, handleChange)}
      </div>
    ));
  }

  return (
    <>
      {masters && (
        <select
          defaultValue=""
          name="masterId"
          className="form-control mt-2 mb-2 mx-2"
          onChange={handleChange}
        >
          <option value="" disabled>
            Student tanlang
          </option>
          {mastersContent}
        </select>
      )}
      <div className="container">
        <div className="row">{renderFormInputs()}</div>
      </div>
    </>
  );
};
