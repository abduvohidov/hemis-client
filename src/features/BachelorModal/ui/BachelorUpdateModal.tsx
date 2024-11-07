import React from "react";
import { bachelorApi } from "../../../shared";
import { Modal } from "../../../shared/ui/Modal/ui/Modal";
import { Bachelor_Modal_Content } from "../../../shared/consts";
import { useModalStore } from "../../../entities/ModalFormLayout";
import { ModalUpdateLayout } from "../../../entities/ModalFormLayout/ui/modalUpdateLayout";

export const BachelorUpdateModal = () => {
  const modalData = useModalStore((state) => state.modalData);
  const updatingMaster = useModalStore((state) => state.updatingMaster);
  const updatingBachelor = updatingMaster?.education[0]?.bachelor;

  async function handleUpdate() {
    try {
      if (updatingBachelor) {
        const updatedResult = await bachelorApi.update(
          Number(updatingBachelor.id),
          modalData
        );
        if (typeof updatedResult === "string" || !updatedResult.success)
          alert(updatedResult);
        else {
          window.location.reload();
          alert("Tugatkan O`TM malumotlari o'zgartirildi ✅");
        }
      }
    } catch (error) {
      console.error("Error submitting form", error);
    }
  }

  return (
    <Modal
      onSave={handleUpdate}
      modalId="bachelorUpdateModal"
      title="Tugatgan O`TM o'zgartirish"
    >
      <ModalUpdateLayout
        content={updatingBachelor}
        modalContent={Bachelor_Modal_Content}
      />
    </Modal>
  );
};
