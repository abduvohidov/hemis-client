import React, { useEffect, useState } from "react";
import {
  ModalFormLayout,
  useModalStore,
} from "../../../entities/ModalFormLayout";
import { Modal } from "../../../shared/ui/Modal/ui/Modal";
import { Address_Modal_Content } from "../../../shared/consts";
import { addressApi, IAddress, IAddressResponse } from "../../../shared";
import { useFormStore } from "../../../widgets/FilterForm/model/formStore";
import { ModalUpdateLayout } from "../../../entities/ModalFormLayout/ui/modalUpdateLayout";

interface MasterModalProps {
  address: IAddressResponse | null;
}

export const AddressModal: React.FC<MasterModalProps> = (props) => {
  const { address } = props;
  const modalData = useModalStore((state) => state.modalData);
  const setInputValue = useModalStore((state) => state.setInputValue);
  const createAddress = useModalStore((state) => state.createAddress);
  const master = useFormStore((state) => state.Masters);
  const [formUpdateData, setFormUpdateData] = useState({});

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
      window.location.reload();
      alert("Masgistrga yashash manzili qo'shildi");
    } catch (error) {
      console.error("Error submitting form", error);
    }
  }
  // update functions
  async function handleUpdate() {
    try {
      if (address) {
        const updatedResult = await addressApi.updateAddress(
          address[0].id,
          modalData as any
        );
        if (typeof updatedResult === "string") {
          alert(updatedResult);
          return;
        }
        window.location.reload();
        alert("Yashash mmanzili o'zgartirildi");
      }
    } catch (error) {
      console.error("Error submitting form", error);
    }
  }

  useEffect(() => {
    if (address) {
      setFormUpdateData(address[0]);
    }
  }, [address]);

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
      modalId={address ? "addressUpdateModal" : "addressModal"}
      title={
        address ? "Yashash manzili o'zgartirish" : "Yashash manzili yaratish"
      }
      onSave={address ? handleUpdate : handleSave}
    >
      {address ? (
        <ModalUpdateLayout
          content={formUpdateData}
          handleChange={handleUpdateChange}
        />
      ) : (
        <ModalFormLayout
          masters={master}
          handleChange={handleChange}
          content={Address_Modal_Content}
        />
      )}
    </Modal>
  );
};
