import React from "react";
import { Input, IMaster, Select } from "../../../shared";
import { useMasterStore } from "../models/Master";
import { Modal } from "../../../shared/ui/Modal";
import { formInputs } from "../models/formInputs";

interface MasterModalProps {
  onSubmit: (MasterData: IMaster) => Promise<void>;
}

export const MasterModal: React.FC<MasterModalProps> = ({ onSubmit }) => {
  const {
    lastName,
    firstName,
    middleName,
    passportNumber,
    jshshr,
    dateOfBirth,
    gender,
    nationality,
    email,
    phoneNumber,
    parentPhoneNumber,
    password,
    setMasterField,
    resetMasterData,
  } = useMasterStore();

  const fieldData = {
    name: "gender",
    options: ["Male", "Female", "Other"],
  };

  const handleSave = () => {
    const MasterData: IMaster = {
      lastName,
      firstName,
      middleName,
      passportNumber,
      jshshr,
      dateOfBirth,
      gender,
      nationality,
      email,
      phoneNumber,
      parentPhoneNumber,
      password,
    };

    onSubmit(MasterData);
    resetMasterData();
  };

  function renderFormsInput() {
    return formInputs.map((item, index) => {
      return (
        <div className="col-lg-4 my-1" key={index}>
          <Input
            placeholder={item.placeholder}
            value={item.value}
            handleChange={(e) => setMasterField(item.fieldName, e.target.value)}
            className="form-control w-100"
          />
        </div>
      );
    });
  }

  return (
    <Modal modalId={"exampleMasterModal"} title="Magistr" onSave={handleSave}>
      <div className="row">
        {renderFormsInput()}
      </div>
    </Modal>
  );
};

// /<div className="row">
// <div className="col-lg-4 my-1">
//   <Input
//     placeholder="Familya"
//     value={lastName}
//     handleChange={(e) => setMasterField("lastName", e.target.value)}
//     className="form-control w-100"
//   />
// </div>
// <div className="col-lg-4 my-1">
//   <Input
//     placeholder="Ism"
//     value={firstName}
//     handleChange={(e) => setMasterField("firstName", e.target.value)}
//     className="form-control w-100"
//   />
// </div>
// <div className="col-lg-4 my-1">
//   <Input
//     placeholder="Ota-Ism"
//     value={middleName}
//     handleChange={(e) => setMasterField("middleName", e.target.value)}
//     className="form-control w-100"
//   />
// </div>
// <div className="col-lg-4 my-1">
//   <Input
//     placeholder="Passport Raqam"
//     value={passportNumber}
//     handleChange={(e) =>
//       setMasterField("passportNumber", e.target.value)
//     }
//     className="form-control w-100"
//   />
// </div>
// <div className="col-lg-4 my-1">
//   <Input
//     placeholder="Jshshr"
//     value={jshshr}
//     handleChange={(e) => setMasterField("jshshr", e.target.value)}
//     className="form-control w-100"
//   />
// </div>
// <div className="col-lg-4 my-1">
//   <Input
//     placeholder="Tugilgan sanasi"
//     value={dateOfBirth}
//     handleChange={(e) => setMasterField("dateOfBirth", e.target.value)}
//     className="form-control w-100"
//   />
// </div>
// <div className="col-lg-4 my-1">
//   <Select
//     field={fieldData}
//     handleChange={(e) => setMasterField("gender", e.target.value)}
//     className="form-control w-100"
//     value={gender}
//   />
// </div>
// <div className="col-lg-4 my-1">
//   <Input
//     placeholder="Millati"
//     value={nationality}
//     handleChange={(e) => setMasterField("nationality", e.target.value)}
//     className="form-control w-100"
//   />
// </div>
// <div className="col-lg-4 my-1">
//   <Input
//     placeholder="Email"
//     value={email}
//     handleChange={(e) => setMasterField("email", e.target.value)}
//     className="form-control w-100"
//   />
// </div>
// <div className="col-lg-4 my-1">
//   <Input
//     placeholder="Telefon Raqami"
//     value={phoneNumber}
//     handleChange={(e) => setMasterField("phoneNumber", e.target.value)}
//     className="form-control w-100"
//   />
// </div>
// <div className="col-lg-4 my-1">
//   <Input
//     placeholder="Ota-ona Telefon Raqami"
//     value={parentPhoneNumber}
//     handleChange={(e) =>
//       setMasterField("parentPhoneNumber", e.target.value)
//     }
//     className="form-control w-100"
//   />
// </div>
// <div className="col-lg-4 my-1">
//   <Input
//     placeholder="parol"
//     value={password}
//     handleChange={(e) => setMasterField("password", e.target.value)}
//     className="form-control w-100"
//   />
// </div>
// </div>
