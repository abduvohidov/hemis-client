import React, { FC, useEffect, useState } from "react";
import { Modal } from "../../../shared/ui/Modal/ui/Modal";
import { Article_Modal_Content } from "../../../shared/consts";
import { useFormStore } from "../../../widgets/FilterForm/model/formStore";
import {
  ModalFormLayout,
  useModalStore,
} from "../../../entities/ModalFormLayout";
import { ModalUpdateLayout } from "../../../entities/ModalFormLayout/ui/modalUpdateLayout";
import {
  IArticleModal,
  IArticleReponse,
} from "../../../shared/api/article/article.types";
import { articleApi } from "../../../shared";

interface IArticleModalProps {
  article: IArticleReponse | null;
}

export const ArticleModal: FC<IArticleModalProps> = (props) => {
  const { article } = props;
  const masters = useFormStore((state) => state.Masters);
  const [formUpdateData, setFormUpdateData] = useState({});
  const setInputValue = useModalStore((state) => state.setInputValue);
  const modalData = useModalStore((state) => state.modalData);
  const createArticle = useModalStore((state) => state.createArticle);

  //create functions
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

  // update functions
  async function handleUpdate() {
    try {
      if (article) {
        const updatedResult = await articleApi.update(article.iud, modalData);
        if (typeof updatedResult === "string") {
          alert(updatedResult);
          return;
        }
        window.location.reload();
        alert("Maqola malumotlari o'zgartirildi");
      }
    } catch (error) {
      console.error("Error submitting form", error);
    }
  }

  useEffect(() => {
    if (article) {
      setFormUpdateData(article);
    }
  }, [article]);

  async function handleUpdateChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;

    setFormUpdateData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
    setInputValue(name, value);
  }

  return (
    <Modal
      modalId={article ? "articleUpdateModal" : "articleModal"}
      title={article ? "Maqola o'zgartirish" : "Maqola yaratish"}
      onSave={article ? handleUpdate : handleSave}
    >
      {article ? (
        <ModalUpdateLayout
          content={formUpdateData}
          handleChange={handleUpdateChange}
        />
      ) : (
        <ModalFormLayout
          handleChange={handleChange}
          masters={masters}
          content={Article_Modal_Content}
        />
      )}
    </Modal>
  );
};
