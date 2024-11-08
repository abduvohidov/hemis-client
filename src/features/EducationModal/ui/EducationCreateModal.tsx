import React from "react";
import {
  ModalFormLayout,
  useModalStore,
} from "../../../entities/ModalFormLayout";
import { IEducation } from "../../../shared";
import { Modal } from "../../../shared/ui/Modal/ui/Modal";
import { Education_Modal_Content } from "../../../shared/consts";
import { useFormStore } from "../../../widgets/FilterForm/model/formStore";

export const EducationCreateModal = () => {
  const masters = useFormStore((state) => state.Masters);
  const modalData = useModalStore((state) => state.modalData);
  const setInputValue = useModalStore((state) => state.setInputValue);
  const createEducation = useModalStore((state) => state.createEducation);

  // excluding masters with education
  let masterWithoutEducation = masters.filter((master) => {
    if (master.education) !master?.education[0]?.id;
  });

  // create function
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setInputValue(name, value);
  }

  async function handleSave() {
    try {
      await createEducation(modalData as unknown as IEducation);
    } catch (error) {
      console.error("Error submitting form", error);
    }
  }

  return (
    <Modal
      onSave={handleSave}
      modalId="educationModal"
      title="OTM malumotini saqlash"
    >
      <ModalFormLayout
        handleChange={handleChange}
        masters={masterWithoutEducation}
        content={Education_Modal_Content}
      />
    </Modal>
  );
};
