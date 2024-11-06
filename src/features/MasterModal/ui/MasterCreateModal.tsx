import React from "react";
import { Modal } from "../../../shared/ui/Modal/ui/Modal";
import { mastersModalContent } from "../../../shared/consts";
import { IMaster } from "../../../shared";
import {
  ModalFormLayout,
  useModalStore,
} from "../../../entities/ModalFormLayout";

export const MasterCreateModal = () => {
  const modalData = useModalStore((state) => state.modalData);
  const createMaster = useModalStore((state) => state.createMaster);
  const setInputValue = useModalStore((state) => state.setInputValue);

  const convertBase64 = (file) => {
    return new Promise<string>((resolve, reject) => {
      if (!file) {
        return "";
      }

      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve((fileReader as any).result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  // create functions
  async function handleSave() {
    try {
      await createMaster(modalData as unknown as IMaster);
    } catch (error) {
      console.error("Error submitting form", error);
    }
  }

  async function handleChange(e: any) {
    const { name, value, type } = e.target;
    if (type === "file") {
      const file = e.target.files[0];
      const base64 = await convertBase64(file);
      setInputValue(name, base64);
    } else {
      setInputValue(name, value);
    }
  }

  return (
    <Modal modalId="masterModal" title="Magistr yaratish" onSave={handleSave}>
      <ModalFormLayout
        handleChange={handleChange}
        content={mastersModalContent}
      />
    </Modal>
  );
};
