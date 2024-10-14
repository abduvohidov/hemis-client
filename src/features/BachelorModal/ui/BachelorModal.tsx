import React from "react";
import { Modal } from "../../../shared/ui/Modal/ui/Modal";
import { Bachelor_Modal_Content } from "../../../shared/consts";
import { useFormStore } from "../../../widgets/FilterForm/model/formStore";
import {
  ModalFormLayout,
  useModalStore,
} from "../../../entities/ModalFormLayout";

export const BachelorModal = () => {
  const setInputValue = useModalStore((state) => state.setInputValue);
  const modalData = useModalStore((state) => state.modalData);
  const createBachelor = useModalStore((state) => state.createBachelor);
  const masters = useFormStore((state) => state.Masters);
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setInputValue(name, value);
  }
  async function handleSave() {
    try {
      await createBachelor(modalData as any);
      window.location.reload()
      alert("Masgistrga Tugatgan OTM malumotlari qo'shildi")
    } catch (error) {
      console.error("Error submitting form", error);
    }
  }
  return (
    <Modal
      modalId={"bachelorModal"}
      title={"Tugatgan Otm yaratish"}
      onSave={handleSave}
    >
      <ModalFormLayout
        handleChange={handleChange}
        masters={masters}
        content={Bachelor_Modal_Content}
      />
    </Modal>
  );
};
