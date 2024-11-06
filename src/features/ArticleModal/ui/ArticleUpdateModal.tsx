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

export const ArticleUpdateModal = () => {
  const modalData = useModalStore((state) => state.modalData);
  const updatingMaster = useModalStore((state) => state.updatingMaster);
  const updatingArticle = updatingMaster?.education[0].articles;

  async function handleUpdate() {
    try {
      if (updatingArticle) {
        const updatedResult = await articleApi.update(
          Number(updatingArticle.id),
          modalData
        );
        if (typeof updatedResult === "string") alert(updatedResult);
        else {
          window.location.reload();
          alert("Maqola malumotlari o'zgartirildi ✅");
        }
      }
    } catch (error) {
      console.error("Error submitting form", error);
    }
  }

  return (
    <Modal
      onSave={handleUpdate}
      title="Maqola o'zgartirish"
      modalId="articleUpdateModal"
    >
      <ModalUpdateLayout content={updatingArticle} />
    </Modal>
  );
};
