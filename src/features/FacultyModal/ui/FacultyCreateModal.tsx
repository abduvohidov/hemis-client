import React, { useEffect, useState } from "react";
import { Modal } from "../../../shared/ui/Modal/ui/Modal";
import { Faculty_Modal_Content } from "../../../shared/consts";
import { useFormStore } from "../../../widgets/FilterForm/model/formStore";
import {
  ModalFormLayout,
  useModalStore,
} from "../../../entities/ModalFormLayout";
import { Faculty_Specizialization_Content } from "../../../shared/consts/modalContents/facultyModalContent";

export const FacultyCreateModal = () => {
  const masters = useFormStore((state) => state.Masters);
  const modalData = useModalStore((state) => state.modalData);
  const [selectedMasterId, setSelectedMasterId] = useState<number>();
  const setInputValue = useModalStore((state) => state.setInputValue);
  const createFaculty = useModalStore((state) => state.createFaculty);
  const [modalContent, setModalContent] = useState(Faculty_Modal_Content);

  //create function
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setInputValue(name, value);
    if (name === "masterId") {
      setSelectedMasterId(Number(value));
    }
  }
  async function handleSave() {
    try {
      await createFaculty(modalData as any);
    } catch (error) {
      console.error("Error submitting form", error);
    }
  }

  // for updating faculty
  useEffect(() => {
    const master = masters?.find((master) => master.id === selectedMasterId);
    const educationName = master?.education[0].currentSpecialization;

    if (educationName) {
      const newOptions = Faculty_Specizialization_Content[educationName] || [];
      setModalContent((prevContent) => {
        return prevContent.map((item, index) =>
          index === 0 ? { ...item, options: newOptions } : item
        );
      });
    }
  }, [selectedMasterId]);
  return (
    <Modal modalId="facultyModal" title="Mutaxassislik yaratish" onSave={handleSave}>
      <ModalFormLayout
        content={modalContent}
        handleChange={handleChange}
        masters={masters}
      />
    </Modal>
  );
};
