import React from "react";
import { IMaster } from "../../../shared";
import { Modal } from "../../../shared/ui/Modal/ui/Modal";
import { mastersModalContent } from "../../../shared/consts";
import {
  ModalFormLayout,
  useModalStore,
} from "../../../entities/ModalFormLayout";

interface MasterModalProps {
  onSubmit: (MasterData: IMaster) => Promise<void>;
}

export const MasterModal: React.FC<MasterModalProps> = ({ onSubmit }) => {
  const setInputValue = useModalStore((state) => state.setInputValue);
  const createMaster = useModalStore((state) => state.createMaster);
  const modalData = useModalStore((state) => state.modalData);
  // const {
  //   lastName,
  //   firstName,
  //   middleName,
  //   passportNumber,
  //   jshshr,
  //   dateOfBirth,
  //   gender,
  //   nationality,
  //   email,
  //   phoneNumber,
  //   parentPhoneNumber,
  //   password,
  //   setMasterField,
  //   resetMasterData,
  // } = useMasterStore();

  const fieldData = {
    name: "gender",
    options: ["Male", "Female", "Other"],
  };

  //
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setInputValue(name, value);
  }
  async function handleSave() {
    try {
      console.log("modalData : " + JSON.stringify(modalData));
      await createMaster(modalData as unknown as IMaster);
    } catch (error) {
      console.error("Error submitting form", error);
    }
  }

  return (
    <Modal
      modalId={"exampleMasterModal"}
      title={"Magistr yaratish"}
      onSave={handleSave}
    >
      <ModalFormLayout
        handleChange={handleChange}
        content={mastersModalContent}
      />
    </Modal>
  );
};
