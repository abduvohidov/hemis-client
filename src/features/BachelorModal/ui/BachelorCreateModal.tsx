import React from "react";
import { Modal } from "../../../shared/ui/Modal/ui/Modal";
import { Bachelor_Modal_Content } from "../../../shared/consts";
import { useFormStore } from "../../../widgets/FilterForm/model/formStore";
import {
  ModalFormLayout,
  useModalStore,
} from "../../../entities/ModalFormLayout";
import { IBachelorModalData } from "../../../shared/api/bachelor/bachelor.types";

export const BachelorCreateModal = () => {
  const masters = useFormStore((state) => state.Masters);
  const modalData = useModalStore((state) => state.modalData);
  const setInputValue = useModalStore((state) => state.setInputValue);
  const createBachelor = useModalStore((state) => state.createBachelor);

  let masterWithoutBachelor = masters.filter(
    (master) => !master?.education[0]?.bachelor
  );

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setInputValue(name, value);
  }

  async function handleSave() {
    try {
      await createBachelor(modalData as unknown as IBachelorModalData);
    } catch (error) {
      console.error("Error submitting form", error);
    }
  }

  return (
    <Modal
      onSave={handleSave}
      modalId="bachelorModal"
      title="Tugatgan Otm yaratish"
    >
      <ModalFormLayout
        handleChange={handleChange}
        masters={masterWithoutBachelor}
        content={Bachelor_Modal_Content}
      />
    </Modal>
  );
};
