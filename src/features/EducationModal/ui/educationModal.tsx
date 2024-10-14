import React from "react";
import { Modal } from "../../../shared/ui/Modal/ui/Modal";
import {
  ModalFormLayout,
  useModalStore,
} from "../../../entities/ModalFormLayout";
import { IEducation } from "../../../shared";
import { useFormStore } from "../../../widgets/FilterForm/model/formStore";
import { Education_Modal_Content } from "../../../shared/consts";

interface MasterModalProps {}

export const EducationModal: React.FC<MasterModalProps> = () => {
  const modalData = useModalStore((state) => state.modalData);
  const setInputValue = useModalStore((state) => state.setInputValue);
  const createEducation = useModalStore((state) => state.createEducation);
  const masters = useFormStore((state) => state.Masters);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setInputValue(name, value);
  }
  async function handleSave() {
    try {
      await createEducation(modalData as unknown as IEducation);
      window.location.reload()
      alert("Masgistrga OTM malumotlari qo'shildi")
    } catch (error) {
      console.error("Error submitting form", error);
    }
  }

  return (
    <Modal modalId="educationModal" title="Magistr" onSave={handleSave}>
      <div className="row">
        <ModalFormLayout
          masters={masters}
          handleChange={handleChange}
          content={Education_Modal_Content}
        />
      </div>
    </Modal>
  );
};
