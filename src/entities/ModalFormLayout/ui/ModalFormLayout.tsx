import React from "react";
import { IMasterReponse, Select } from "../../../shared";
import { DateInput } from "../../DateInput/ui/DateInput";
import { ProfileInput } from "../../../entities/ProfileInput";
import { MastersModalContentProps } from "../../../shared/consts/modalContents/mastersModalContent";

export interface ModalLayoutFormProps {
  content: Array<any>;
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

  function inputType(item: MastersModalContentProps, inputType: string) {
    if (inputType === "parentPhoneNumber" || inputType === "phoneNumber") {
      return (
        <ProfileInput
          isPlaceholder={false}
          isPhoneInput={true}
          name={item.name}
          disabled={false}
          onChange={handleChange}
          placeholder={
            inputType === "parentPhoneNumber"
              ? "Uydagilarning raqami"
              : "Shaxsiy telefon raqam"
          }
        />
      );
    } else if (inputType === "dateOfBirth") {
      return (
        <DateInput
          value={item.value}
          onChange={handleChange}
          name={item.name}
        />
      );
    } else if (item.isSelect) {
      return (
        <Select
          handleChange={handleChange}
          field={item}
          defaultValue={item.placeholder}
        />
      );
    } else {
      return (
        <input
          placeholder={item.placeholder}
          name={item.name}
          onChange={handleChange}
          className="form-control w-100"
        />
      );
    }
  }

  function renderFormInputs() {
    return content.map((item: MastersModalContentProps, index) => (
      <div className={"col-lg-4 my-1"} key={index}>
        {inputType(item, item.name)}
      </div>
    ));
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
