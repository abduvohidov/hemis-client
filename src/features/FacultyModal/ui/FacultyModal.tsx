import React, { FC, useEffect, useState } from "react";
import { Modal } from "../../../shared/ui/Modal/ui/Modal";
import { Faculty_Modal_Content } from "../../../shared/consts";
import { useFormStore } from "../../../widgets/FilterForm/model/formStore";
import {
  ModalFormLayout,
  useModalStore,
} from "../../../entities/ModalFormLayout";
import { facultyApi, IFacultyReponse } from "../../../shared";
import { ModalUpdateLayout } from "../../../entities/ModalFormLayout/ui/modalUpdateLayout";

interface FacultyModalProps {
  faculty: IFacultyReponse | null;
}

export const FacultyModal: FC<FacultyModalProps> = (props) => {
  const { faculty } = props;
  const masters = useFormStore((state) => state.Masters);
  const [formUpdateData, setFormUpdateData] = useState({});
  const modalData = useModalStore((state) => state.modalData);
  const setInputValue = useModalStore((state) => state.setInputValue);
  const createFaculty = useModalStore((state) => state.createFaculty);

  //create function
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setInputValue(name, value);
  }
  async function handleSave() {
    try {
      await createFaculty(modalData as any);
      window.location.reload();
      alert("Masgistrga fakultet qo'shildi");
    } catch (error) {
      console.error("Error submitting form", error);
    }
  }

  // update function
  async function handleUpdate() {
    try {
      if (faculty) {
        const updatedResult = await facultyApi.update(faculty.id, modalData);
        if (typeof updatedResult === "string") {
          alert(updatedResult);
          return;
        }
        window.location.reload();
        alert("Fakultet malumotlari o'zgartirildi");
      }
    } catch (error) {
      console.error("Error submitting form", error);
    }
  }

  useEffect(() => {
    if (faculty) {
      setFormUpdateData(faculty);
    }
  }, [faculty]);

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
      modalId={faculty ? "facultyUpdateModal" : "facultyModal"}
      title={faculty ? "Fakultet o'zgartirish" : "Fakultet yaratish"}
      onSave={faculty ? handleUpdate : handleSave}
    >
      {faculty ? (
        <ModalUpdateLayout
          content={formUpdateData}
          handleChange={handleUpdateChange}
        />
      ) : (
        <ModalFormLayout
          handleChange={handleChange}
          masters={masters}
          content={Faculty_Modal_Content}
        />
      )}
    </Modal>
  );
};
