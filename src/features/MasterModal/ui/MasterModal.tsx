import React from "react";
import { IMaster } from "../../../shared";
import { useMasterStore } from "../models/Master";
import { Modal } from "../../../shared/ui/Modal/ui/Modal";
import { ModalFormLayout } from "../../../entities/ModalFormLayout";
import { mastersModalContent } from "../../../shared/consts";

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

  return (
    <Modal
      modalId={"exampleMasterModal"}
      title={"Magistr yaratish"}
      onSave={handleSave}
    >
      <ModalFormLayout
        content={mastersModalContent}
        setFields={setMasterField}
      />
    </Modal>
  );
};
