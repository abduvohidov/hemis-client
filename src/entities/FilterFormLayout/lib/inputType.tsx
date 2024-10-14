import { Select } from "../../../shared";
import { DateInput } from "../../DateInput";
import { ProfileInput } from "../../ProfileInput";
import { MastersModalContentProps } from "../../../shared/consts/modalContents/mastersModalContent";

export function inputType(
  item: MastersModalContentProps,
  inputType: string,
  handleChange: any
) {
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
  } else if (
    inputType === "dateOfBirth" ||
    inputType === "secondArticleDate" ||
    inputType === "firstArticleDate"
  ) {
    return (
      <DateInput value={item.value} onChange={handleChange} name={item.name} placeholder={item.placeholder} />
    );
  } else if (item.isSelect) {
    return (
      <Select
        handleChange={handleChange}
        field={item}
        defaultValue={item.placeholder}
      />
    );
  } else if (item.isFileUpload) {
    return <div className="input-group mb-3">
      <label className="input-group-text" htmlFor={item.name}>{item.placeholder}</label>
      <input name={item.name} type="file" className="form-control" id={item.name} onChange={handleChange} />
    </div>
  } else {
    return (
        <input
            placeholder={item.placeholder}
            name={item.name}
            onChange={handleChange}
            className="form-control"
        />
    );
  }
}
