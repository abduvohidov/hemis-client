import React from "react";
import { IMaster } from "../../../shared";
import { Modal } from "../../../shared/ui/Modal/ui/Modal";
import { mastersModalContent } from "../../../shared/consts";
import {
  ModalFormLayout,
  useModalStore,
} from "../../../entities/ModalFormLayout";

interface MasterModalProps {
  onSubmit: (MasterData: IMaster) => Promise<void>;
}

export const MasterModal: React.FC<MasterModalProps> = () => {
  const setInputValue = useModalStore((state) => state.setInputValue);
  const createMaster = useModalStore((state) => state.createMaster);
  const modalData = useModalStore((state) => state.modalData);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setInputValue(name, value);
  }
  async function handleSave() {
    try {
      await createMaster(modalData as unknown as IMaster);
      window.location.reload();
      alert("Masgistr qo'shilid")
    } catch (error) {
      console.error("Error submitting form", error);
    }
  }

  return (
    <Modal
      modalId={"masterModal"}
      title={"Magistr yaratish"}
      onSave={handleSave}
    >
      <ModalFormLayout
        handleChange={handleChange}
        content={mastersModalContent}
      />
    </Modal>
  );
};
