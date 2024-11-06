import React, { FC, useEffect, useState } from "react";
import { Modal } from "../../../shared/ui/Modal/ui/Modal";
import { facultyApi, IFacultyResponse, IMaster } from "../../../shared";
import { Faculty_Modal_Content } from "../../../shared/consts";
import { useFormStore } from "../../../widgets/FilterForm/model/formStore";
import {
  ModalFormLayout,
  useModalStore,
} from "../../../entities/ModalFormLayout";
import { ModalUpdateLayout } from "../../../entities/ModalFormLayout/ui/modalUpdateLayout";
import { Faculty_Specizialization_Content } from "../../../shared/consts/modalContents/facultyModalContent";

export const FacultyUpdateModal = () => {
  const modalData = useModalStore((state) => state.modalData);
  const updatingMaster = useModalStore((state) => state.updatingMaster);
  const updatingFaculty = updatingMaster?.education[0].faculty;
  async function handleUpdate() {
    try {
      if (updatingFaculty) {
        const updatedResult = await facultyApi.update(
          Number(updatingFaculty.id),
          modalData
        );
        if (typeof updatedResult === "string") alert(updatedResult);
        else {
          window.location.reload();
          alert("Fakultet malumotlari o'zgartirildi ✅");
        }
      }
    } catch (error) {
      console.error("Error submitting form", error);
    }
  }
  return (
    <Modal
      onSave={handleUpdate}
      modalId="facultyUpdateModal"
      title="Fakultet o'zgartirish"
    >
      <ModalUpdateLayout content={updatingFaculty} />
    </Modal>
  );
};
