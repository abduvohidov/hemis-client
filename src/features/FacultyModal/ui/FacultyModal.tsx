import React, { FC, useEffect, useState } from "react";
import { Modal } from "../../../shared/ui/Modal/ui/Modal";
import { facultyApi, IFacultyResponse, IMaster } from "../../../shared";
import { Faculty_Modal_Content } from "../../../shared/consts";
import { useFormStore } from "../../../widgets/FilterForm/model/formStore";
import {
  ModalFormLayout,
  useModalStore,
} from "../../../entities/ModalFormLayout";
import { ModalUpdateLayout } from "../../../entities/ModalFormLayout/ui/modalUpdateLayout";
import { Faculty_Specizialization_Content } from "../../../shared/consts/modalContents/facultyModalContent";

interface FacultyModalProps {
  faculty: IFacultyResponse | null;
}

export const FacultyModal: FC<FacultyModalProps> = (props) => {
  const { faculty } = props;
  const [formUpdateData, setFormUpdateData] = useState({});
  const [selectedMasterId, setSelectedMasterId] = useState<number>();
  const [modalContent, setModalContent] = useState(Faculty_Modal_Content);

  const masters = useFormStore((state) => state.Masters);
  const modalData = useModalStore((state) => state.modalData);
  const setInputValue = useModalStore((state) => state.setInputValue);
  const createFaculty = useModalStore((state) => state.createFaculty);

  // excluding masters with faculty
  let masterWithoutFaculty = masters.filter(
    (master) => !master?.education[0]?.facultyId
  );

  //create function
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setInputValue(name, value);
    if (name === "masterId") {
      setSelectedMasterId(Number(value));
    }
  }
  async function handleSave() {
    try {
      await createFaculty(modalData as any);
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

  // for updating faculty
  useEffect(() => {
    const master = masters?.find((master) => master.id === selectedMasterId);
    const educationName = master?.education[0].currentSpecialization;

    if (educationName) {
      const newOptions = Faculty_Specizialization_Content[educationName] || [];
      setModalContent((prevContent) => {
        return prevContent.map((item, index) =>
          index === 0 ? { ...item, options: newOptions } : item
        );
      });
    }
  }, [selectedMasterId]);
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
          masters={masterWithoutFaculty}
          content={modalContent}
        />
      )}
    </Modal>
  );
};
