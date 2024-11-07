import React from "react";
import { addressApi } from "../../../shared";
import { Modal } from "../../../shared/ui/Modal/ui/Modal";
import { useModalStore } from "../../../entities/ModalFormLayout";
import { ModalUpdateLayout } from "../../../entities/ModalFormLayout/ui/modalUpdateLayout";
import { Address_Modal_Content } from "../../../shared/consts/modalContents/addressModalContent";

export const AddressUpdateModal = () => {
  const modalData = useModalStore((state) => state.modalData);
  const updatingMaster = useModalStore((state) => state.updatingMaster);
  const updatingAddress = updatingMaster?.addresses[0];
  async function handleUpdate() {
    try {
      if (updatingAddress) {
        const updatedResult = await addressApi.updateAddress(
          Number(updatingAddress.id),
          modalData
        );
        if (typeof updatedResult === "string") alert(updatedResult);
        else {
          window.location.reload();
          alert("Yashash mmanzili o'zgartirildi ✅");
        }
      }
    } catch (error) {
      console.error("Error submitting form", error);
    }
  }

  return (
    <Modal
      onSave={handleUpdate}
      modalId="addressUpdateModal"
      title="Yashash manzili o'zgartirish"
    >
      <ModalUpdateLayout content={updatingAddress} modalContent={Address_Modal_Content}/>
    </Modal>
  );
};
