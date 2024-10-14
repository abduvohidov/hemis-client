import React from "react";
import { IMaster, IMasterReponse, MasterApi } from "../../../shared";
import { Modal } from "../../../shared/ui/Modal/ui/Modal";
import { mastersModalContent } from "../../../shared/consts";
import {
  ModalFormLayout,
  useModalStore,
} from "../../../entities/ModalFormLayout";
import { ModalUpdateLayout } from "../../../entities/ModalFormLayout/ui/modalUpdateLayout";

interface MasterModalProps {
  master: IMasterReponse | null;
}

export const MasterModal: React.FC<MasterModalProps> = (props) => {
  const { master } = props;
  const setInputValue = useModalStore((state) => state.setInputValue);
  const createMaster = useModalStore((state) => state.createMaster);
  const modalData = useModalStore((state) => state.modalData);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setInputValue(name, value);
  }

  async function handleUpdate() {
    try {
      if (master) {
        console.log(modalData);

        await MasterApi.updateMaster(master.id, modalData);
        window.location.reload();
        alert("Masgistr o'zgartirildi");
      }
    } catch (error) {
      console.error("Error submitting form", error);
    }
  }
  async function handleSave() {
    try {
      await createMaster(modalData as unknown as IMaster);
      window.location.reload();
      alert("Masgistr qo'shilid");
    } catch (error) {
      console.error("Error submitting form", error);
    }
  }

  return (
    <Modal
      modalId={master ? "masterUpdateModal" : "masterModal"}
      title={master ? "Magistr o'zgartirish" : "Magistr yaratish"}
      onSave={master ? handleUpdate : handleSave}
    >
      {master ? (
        <ModalUpdateLayout content={master} handleChange={handleChange} />
      ) : (
        <ModalFormLayout
          handleChange={handleChange}
          content={master ? master : mastersModalContent}
          isUpdate={master ? true : false}
        />
      )}
    </Modal>
  );
};
