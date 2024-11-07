import React from "react";
import { Select } from "../../../shared";
import InputMask from "react-input-mask";
import { DateInput } from "../../DateInput";
import { ProfileInput } from "../../ProfileInput";
import { MastersModalContentProps } from "../../../shared/consts/modalContents/mastersModalContent";

export function updateInputType(
  item: MastersModalContentProps,
  inputType: string,
  handleChange: any
) {
  const { value, name, placeholder, isSelect } = item;
  if (inputType === "parentPhoneNumber" || inputType === "phoneNumber") {
    return (
      <ProfileInput
        isPlaceholder={false}
        isPhoneInput={true}
        name={name}
        disabled={false}
        value={value as string}
        onChange={handleChange}
        placeholder={
          inputType === "parentPhoneNumber"
            ? "Uydagilarning raqami"
            : "Shaxsiy telefon raqam"
        }
      />
    );
  } else if (
    inputType === "dateOfBirth" ||
    inputType === "secondArticleDate" ||
    inputType === "firstArticleDate"
  ) {
    return (
      <DateInput
        selected={value as any}
        onChange={handleChange}
        name={name}
        placeholder={placeholder}
      />
    );
  } else if (isSelect) {
    return (
      <Select handleChange={handleChange} field={item} defaultValue={value} />
    );
  } else if (inputType === "jshshr") {
    return (
      <InputMask
        name={name}
        mask="999 999 999 999"
        maskChar="_"
        value={value}
        className="form-control"
        onChange={(e) => {
          handleChange(e);
        }}
        required
        placeholder={placeholder || value}
      />
    );
  } else {
    return (
      <input
        placeholder={item.placeholder}
        name={item.name}
        onChange={handleChange}
        className="form-control"
        value={value}
        required
      />
    );
  }
}
