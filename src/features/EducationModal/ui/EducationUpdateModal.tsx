import React from "react";
import { educationApi } from "../../../shared";
import { Modal } from "../../../shared/ui/Modal/ui/Modal";
import { Education_Modal_Content } from "../../../shared/consts";
import { useModalStore } from "../../../entities/ModalFormLayout";
import { ModalUpdateLayout } from "../../../entities/ModalFormLayout/ui/modalUpdateLayout";
export const EducationUpdateModal = () => {
  const modalData = useModalStore((state) => state.modalData);
  const updatingMaster = useModalStore((state) => state.updatingMaster);
  const updatingEducation = updatingMaster?.education[0];

  async function handleUpdate() {
    try {
      if (updatingEducation) {
        const result = await educationApi.update(
          Number(updatingEducation.id),
          modalData
        );
        if (typeof result.message === "string") alert(result.message);
        else {
          window.location.reload();
          alert("Masgistrga OTM malumotlari o'zgartirildi ✅");
        }
      }
    } catch (error) {
      console.error("Error submitting form", error);
    }
  }

  return (
    <Modal
      onSave={handleUpdate}
      modalId="educationUpdateModal"
      title="OTM malumotini o'zgartirish"
    >
      <ModalUpdateLayout
        content={updatingEducation}
        modalContent={Education_Modal_Content}
      />
    </Modal>
  );
};
