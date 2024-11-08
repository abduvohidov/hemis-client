import React from "react";
import {
  ModalFormLayout,
  useModalStore,
} from "../../../entities/ModalFormLayout";
import { Modal } from "../../../shared/ui/Modal/ui/Modal";
import { Address_Modal_Content } from "../../../shared/consts";
import { IAddress } from "../../../shared";
import { useFormStore } from "../../../widgets/FilterForm/model/formStore";

export const AddressCreateModal = () => {
  const masters = useFormStore((state) => state.Masters);
  const modalData = useModalStore((state) => state.modalData);
  const setInputValue = useModalStore((state) => state.setInputValue);
  const createAddress = useModalStore((state) => state.createAddress);

  // excluding masters with address
  let mastersWithoutAddress = masters.filter((master) => {
    if (master.addresses) !master?.addresses[0]?.id;
  });

  // create functions
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setInputValue(name, value);
  }

  async function handleSave() {
    try {
      await createAddress(modalData as unknown as IAddress);
    } catch (error) {
      console.error("Error submitting form", error);
    }
  }
  return (
    <Modal
      onSave={handleSave}
      modalId="addressModal"
      title="Yashash manzili yaratish"
    >
      <ModalFormLayout
        masters={mastersWithoutAddress}
        handleChange={handleChange}
        content={Address_Modal_Content}
      />
    </Modal>
  );
};
