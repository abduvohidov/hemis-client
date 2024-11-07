import React, { useEffect, useState } from "react";
import { facultyApi } from "../../../shared";
import { Modal } from "../../../shared/ui/Modal/ui/Modal";
import { Faculty_Modal_Content } from "../../../shared/consts";
import { useModalStore } from "../../../entities/ModalFormLayout";
import { ModalUpdateLayout } from "../../../entities/ModalFormLayout/ui/modalUpdateLayout";
import { Faculty_Specizialization_Content } from "../../../shared/consts/modalContents/facultyModalContent";

export const FacultyUpdateModal = () => {
  const modalData = useModalStore((state) => state.modalData);
  const updatingMaster = useModalStore((state) => state.updatingMaster);
  const updatingFaculty = updatingMaster?.education[0].faculty;
  const [modalContent, setModalContent] = useState(Faculty_Modal_Content);

  useEffect(() => {
    const educationName = updatingMaster?.education[0].currentSpecialization;
    if (educationName) {
      const newOptions = Faculty_Specizialization_Content[educationName] || [];
      setModalContent((prevContent) => {
        return prevContent.map((item, index) =>
          index === 0 ? { ...item, options: newOptions } : item
        );
      });
    }
  }, [updatingMaster]);
  async function handleUpdate() {
    try {
      if (updatingFaculty) {
        const updatedResult = await facultyApi.update(
          Number(updatingFaculty.id),
          modalData
        );
        if (typeof updatedResult === "string") alert(updatedResult);
        else {
          window.location.reload();
          alert("Fakultet malumotlari o'zgartirildi ✅");
        }
      }
    } catch (error) {
      console.error("Error submitting form", error);
    }
  }
  return (
    <Modal
      onSave={handleUpdate}
      modalId="facultyUpdateModal"
      title="Fakultet o'zgartirish"
    >
      <ModalUpdateLayout
        content={updatingFaculty}
        modalContent={modalContent}
      />
    </Modal>
  );
};
