import React, { FC, useEffect, useState } from "react";
import { Modal } from "../../../shared/ui/Modal/ui/Modal";
import { Bachelor_Modal_Content } from "../../../shared/consts";
import { useFormStore } from "../../../widgets/FilterForm/model/formStore";
import {
  ModalFormLayout,
  useModalStore,
} from "../../../entities/ModalFormLayout";
import { bachelorApi, IBachelorResponse } from "../../../shared";
import { ModalUpdateLayout } from "../../../entities/ModalFormLayout/ui/modalUpdateLayout";

interface IBachelorProps {
  bachelor: IBachelorResponse | null;
}

export const BachelorModal: FC<IBachelorProps> = (props) => {
  const { bachelor } = props;
  const setInputValue = useModalStore((state) => state.setInputValue);
  const modalData = useModalStore((state) => state.modalData);
  const createBachelor = useModalStore((state) => state.createBachelor);
  const masters = useFormStore((state) => state.Masters);
  const [formUpdateData, setFormUpdateData] = useState({});

  //create function
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setInputValue(name, value);
  }

  async function handleSave() {
    try {
      await createBachelor(modalData as any);
      window.location.reload();
      alert("Masgistrga Tugatgan OTM malumotlari qo'shildi");
    } catch (error) {
      console.error("Error submitting form", error);
    }
  }

  // update function
  async function handleUpdate() {
    try {
      if (bachelor) {
        console.log(bachelor.id);

        const updatedResult = await bachelorApi.update(bachelor.id, modalData);
        if (typeof updatedResult === "string") {
          alert(updatedResult);
          return;
        }
        window.location.reload();
        alert("Tugatkan OTM malumotlari o'zgartirildi");
      }
    } catch (error) {
      console.error("Error submitting form", error);
    }
  }

  useEffect(() => {
    if (bachelor) {
      setFormUpdateData(bachelor);
    }
  }, [bachelor]);

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
      modalId={bachelor ? "bachelorUpdateModal" : "bachelorModal"}
      title={bachelor ? "Tugatgan Otm o'zgartirish" : "Tugatgan Otm yaratish"}
      onSave={bachelor ? handleUpdate : handleSave}
    >
      {bachelor ? (
        <ModalUpdateLayout
          content={formUpdateData}
          handleChange={handleUpdateChange}
        />
      ) : (
        <ModalFormLayout
          handleChange={handleChange}
          masters={masters}
          content={Bachelor_Modal_Content}
        />
      )}
    </Modal>
  );
};
