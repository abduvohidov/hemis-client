import React from "react";
import { Modal } from "../../../shared/ui/Modal/ui/Modal";
import { Article_Modal_Content } from "../../../shared/consts";
import { useFormStore } from "../../../widgets/FilterForm/model/formStore";
import {
  ModalFormLayout,
  useModalStore,
} from "../../../entities/ModalFormLayout";
import { IArticleModal } from "../../../shared/api/article/article.types";

export const ArticleCreateModal = () => {
  const masters = useFormStore((state) => state.Masters);
  const modalData = useModalStore((state) => state.modalData);
  const setInputValue = useModalStore((state) => state.setInputValue);
  const createArticle = useModalStore((state) => state.createArticle);
  let masterWithoutArtcle = masters.filter(
    (master) => !master?.education[0]?.articles
  );

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setInputValue(name, value);
  }
  async function handleSave() {
    try {
      await createArticle(modalData as unknown as IArticleModal);
    } catch (error) {
      console.error("Error submitting form", error);
    }
  }
  return (
    <Modal modalId="articleModal" title="Maqola yaratish" onSave={handleSave}>
      <ModalFormLayout
        handleChange={handleChange}
        masters={masterWithoutArtcle}
        content={Article_Modal_Content}
      />
    </Modal>
  );
};
