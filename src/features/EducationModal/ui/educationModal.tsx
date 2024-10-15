import React, { useEffect, useState } from "react";
import {
  ModalFormLayout,
  useModalStore,
} from "../../../entities/ModalFormLayout";
import { educationApi, IEducation } from "../../../shared";
import { Modal } from "../../../shared/ui/Modal/ui/Modal";
import { Education_Modal_Content } from "../../../shared/consts";
import { useFormStore } from "../../../widgets/FilterForm/model/formStore";
import { ModalUpdateLayout } from "../../../entities/ModalFormLayout/ui/modalUpdateLayout";

interface MasterModalProps {
  education: any | null;
}

export const EducationModal: React.FC<MasterModalProps> = (props) => {
  const { education } = props;
  const masters = useFormStore((state) => state.Masters);
  const [formUpdateData, setFormUpdateData] = useState({});
  const modalData = useModalStore((state) => state.modalData);
  const setInputValue = useModalStore((state) => state.setInputValue);
  const createEducation = useModalStore((state) => state.createEducation);

  // create function
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setInputValue(name, value);
  }

  async function handleSave() {
    try {
      await createEducation(modalData as unknown as IEducation);
      window.location.reload();
      alert("Masgistrga OTM malumotlari qo'shildi");
    } catch (error) {
      console.error("Error submitting form", error);
    }
  }
  // update function
  async function handleUpdate() {
    try {
      if (education) {
        const updatedResult = await educationApi.udpate(
          education[0].id,
          modalData
        );
        if (typeof updatedResult === "string") {
          alert(updatedResult);
          return;
        }
        window.location.reload();
        alert("Masgistrga OTM malumotlari o'zgartirildi");
      }
    } catch (error) {
      console.error("Error submitting form", error);
    }
  }

  useEffect(() => {
    if (education) {
      setFormUpdateData(education[0]);
    }
  }, [education]);

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
      modalId={education ? "educationUpdateModal" : "educationModal"}
      title={
        education ? "OTM malumotini o'zgartirish" : "OTM malumotini saqlash"
      }
      onSave={education ? handleUpdate : handleSave}
    >
      {education ? (
        <ModalUpdateLayout
          content={formUpdateData }
          handleChange={handleUpdateChange}
        />
      ) : (
        <ModalFormLayout
          masters={masters}
          handleChange={handleChange}
          content={Education_Modal_Content}
        />
      )}
    </Modal>
  );
};
