import React from "react";
import { Modal } from "../../../shared/ui/Modal/ui/Modal";
import { Article_Modal_Content } from "../../../shared/consts";
import { useFormStore } from "../../../widgets/FilterForm/model/formStore";

import {
  ModalFormLayout,
  useModalStore,
} from "../../../entities/ModalFormLayout";

export const ArticleModal = () => {
  const setInputValue = useModalStore((state) => state.setInputValue);
  const modalData = useModalStore((state) => state.modalData);
  const createArticle = useModalStore((state) => state.createArticle);
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
      await createArticle(modalData as any);
      window.location.reload()
      alert("Masgistrga maqola qo'shildi")
    } catch (error) {
      console.error("Error submitting form", error);
    }
  }
  return (
    <Modal
      modalId={"articleModal"}
      title={"Maqola yaratish"}
      onSave={handleSave}
    >
      <ModalFormLayout
        handleChange={handleChange}
        masters={masters}
        content={Article_Modal_Content}
      />
    </Modal>
  );
};
