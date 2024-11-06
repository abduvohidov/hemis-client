import React from "react";
import { masterApi } from "../../../shared";
import { Modal } from "../../../shared/ui/Modal/ui/Modal";
import { useModalStore } from "../../../entities/ModalFormLayout";
import { ModalUpdateLayout } from "../../../entities/ModalFormLayout/ui/modalUpdateLayout";

export const MasterUpdateModal = () => {
  const modalData = useModalStore((state) => state.modalData);
  const updatingMaster = useModalStore((state) => state.updatingMaster);
  async function handleUpdate() {
    try {
      if (updatingMaster) {
        const result = await masterApi.updateMaster(
          Number(updatingMaster.id),
          modalData
        );
        if (typeof result.message === "string") return alert(result);
        else {
          window.location.reload();
          alert("Magistr malumotlari o`zgartirildi ✅");
        }
      }
    } catch (error) {
      console.error("Error submitting form", error);
    }
  }

  return (
    <Modal
      modalId="masterUpdateModal"
      title="Magistr o'zgartirish"
      onSave={handleUpdate}
    >
      <ModalUpdateLayout content={updatingMaster} />
    </Modal>
  );
};
