import React from "react";
import { Modal } from "../../../shared/ui/Modal/ui/Modal";
import {
  ModalFormLayout,
  useModalStore,
} from "../../../entities/ModalFormLayout";
import { IAddress } from "../../../shared";
import { useFormStore } from "../../../widgets/FilterForm/model/formStore";
import { Address_Modal_Content } from "../../../shared/consts";

interface MasterModalProps {}

export const AddressModal: React.FC<MasterModalProps> = () => {
  const modalData = useModalStore((state) => state.modalData);
  const setInputValue = useModalStore((state) => state.setInputValue);
  const createAddress = useModalStore((state) => state.createAddress);
  const masters = useFormStore((state) => state.Masters);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setInputValue(name, value);
    
  }
  async function handleSave() {
    try {
      await createAddress(modalData as unknown as IAddress);
      window.location.reload();
      alert("Masgistrga yashash manzili qo'shildi")
    } catch (error) {
      console.error("Error submitting form", error);
    }
  }

  return (
    <Modal modalId="addressModal" title="Magistr" onSave={handleSave}>
      <div className="row">
        <ModalFormLayout
          masters={masters}
          handleChange={handleChange}
          content={Address_Modal_Content}
        />
      </div>
    </Modal>
  );
};
