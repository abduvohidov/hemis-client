import React from "react";
import { Select } from "../../../shared";
import { DateInput } from "../../DateInput/ui/DateInput";
import { ProfileInput } from "../../../entities/ProfileInput";
import { MastersModalContentProps } from "../../../shared/consts/modalContents/mastersModalContent";

export function inputType(
  item: MastersModalContentProps,
  inputType: string,
  handleChange: any
) {
  const { value, name, placeholder, isSelect } = item;
  if (inputType === "parentPhoneNumber" || inputType === "phoneNumber") {
    return (
      <ProfileInput
        value={value || ""}
        isPlaceholder={false}
        isPhoneInput={true}
        name={name}
        disabled={false}
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
        value={value || ""}
        onChange={handleChange}
        name={name}
        placeholder={placeholder}
      />
    );
  } else if (isSelect) {
    return (
      <Select
        handleChange={handleChange}
        field={item}
        defaultValue={placeholder}
      />
    );
  } else {
    return (
      <input
        placeholder={placeholder}
        name={name}
        onChange={handleChange}
        className="form-control"
        value={value || ""}
      />
    );
  }
}
