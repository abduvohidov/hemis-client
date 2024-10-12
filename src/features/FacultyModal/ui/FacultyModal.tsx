import React from "react";
import { Modal } from "../../../shared/ui/Modal/ui/Modal";
import { Faculty_Modal_Content } from "../../../shared/consts";
import { useFormStore } from "../../../widgets/FilterForm/model/formStore";

import {
  ModalFormLayout,
  useModalStore,
} from "../../../entities/ModalFormLayout";

export const FacultyModal = () => {
  const setInputValue = useModalStore((state) => state.setInputValue);
  const modalData = useModalStore((state) => state.modalData);
  const createFaculty = useModalStore((state) => state.createFaculty);
  const masters = useFormStore((state) => state.Masters);
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setInputValue(name, value);
  }
  async function handleSave() {
    try {
      console.log(modalData);
      await createFaculty(modalData as any);
    } catch (error) {
      console.error("Error submitting form", error);
    }
  }
  return (
    <Modal
      modalId={"facultyModal"}
      title={"Fakultet yaratish"}
      onSave={handleSave}
    >
      <ModalFormLayout
        handleChange={handleChange}
        masters={masters}
        content={Faculty_Modal_Content}
      />
    </Modal>
  );
};
