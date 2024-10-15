import React, { useEffect, useState } from "react";
import { Modal } from "../../../shared/ui/Modal/ui/Modal";
import { mastersModalContent } from "../../../shared/consts";
import {
  ModalFormLayout,
  useModalStore,
} from "../../../entities/ModalFormLayout";
import { IMaster, IMasterReponse, MasterApi } from "../../../shared";
import { ModalUpdateLayout } from "../../../entities/ModalFormLayout/ui/modalUpdateLayout";

interface MasterModalProps {
  master: IMasterReponse | null;
}

export const MasterModal: React.FC<MasterModalProps> = (props) => {
  const { master } = props;
  const setInputValue = useModalStore((state) => state.setInputValue);
  const createMaster = useModalStore((state) => state.createMaster);
  const modalData = useModalStore((state) => state.modalData);
  const [formUpdateData, setFormUpdateData] = useState({});

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
      window.location.reload()
      alert("Masgistr qo'shilid");
    } catch (error) {
      console.error("Error submitting form", error);
    }
  }

  async function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value, type } = e.target;
    if (type === "file") {
      const file = e.target.files[0];
      const base64 = await convertBase64(file);
      setInputValue(name, base64);
    } else {
      setInputValue(name, value);
    }
  }

  // update functions
  async function handleUpdate() {
    try {
      if (master) {
        const updatedResult = await MasterApi.updateMaster(
          master.id,
          modalData as any
        );
        if (typeof updatedResult === "string") {
          alert(updatedResult);
          return;
        }
        window.location.reload();
        alert("Masgistr o'zgartirildi");
      }
    } catch (error) {
      console.error("Error submitting form", error);
    }
  }

  useEffect(() => {
    if (master) {
      setFormUpdateData(master);
    }
  }, [master]);

  async function handleUpdateChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value, type } = e.target;

    setFormUpdateData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
    setInputValue(name, value);
  }

  return (
    <Modal
      modalId={master ? "masterUpdateModal" : "masterModal"}
      title={master ? "Magistr o'zgartirish" : "Magistr yaratish"}
      onSave={master ? handleUpdate : handleSave}
    >
      {master ? (
        <ModalUpdateLayout
          content={formUpdateData}
          handleChange={handleUpdateChange}
        />
      ) : (
        <ModalFormLayout
          handleChange={handleChange}
          content={mastersModalContent}
        />
      )}
    </Modal>
  );
};
