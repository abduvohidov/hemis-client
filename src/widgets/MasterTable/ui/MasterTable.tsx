import { tableHead } from "../model/tableHead.ts";
import React, { useEffect, useState } from "react";
import { Table } from "../../../shared/ui/Table/index.ts";
import { ButtonModal } from "../../../entities/ButtonsModal";
import { Button, IMasterReponse } from "../../../shared/index.ts";
import { useFormStore } from "../../FilterForm/model/formStore.ts";
import { useModalStore } from "../../../entities/ModalFormLayout/index.ts";
import { removeMaster, findMasters, generateXlsxFile } from "../lib/index.ts";
import {
  AddressCreateModal,
  AddressUpdateModal,
} from "../../../features/AddressModal/index.ts";
import {
  FacultyCreateModal,
  FacultyUpdateModal,
} from "../../../features/FacultyModal";
import {
  ArticleCreateModal,
  ArticleUpdateModal,
} from "../../../features/ArticleModal";
import {
  BachelorCreateModal,
  BachelorUpdateModal,
} from "../../../features/BachelorModal";
import {
  renderMasterArticle,
  renderMasterBachelor,
  renderMasterEducation,
  renderMasterFaculty,
} from "../lib/renderData.tsx";
import { Modal } from "bootstrap";
import {
  MasterUpdateModal,
  MasterCreateModal,
} from "../../../features/MasterModal";
import {
  EducationUpdateModal,
  EducationCreateModal,
} from "../../../features/EducationModal";

export const MasterTable: React.FC = () => {
  const masters = useFormStore((state) => state.Masters);
  const setMaster = useModalStore((state) => state.setMaster);
  const [data, setData] = useState<any[]>([]);

  async function fetchMasters() {
    try {
      await findMasters({ setData });
    } catch (err) {
      console.error(
        "Error fetching masters:",
        err instanceof Error ? err.message : err
      );
    }
  }

  function openUpdateModal(master, modalId) {
    setMaster(master);
    const modal = new Modal(document.getElementById(modalId));
    modal.show();
  }

  async function handleDelete(item: IMasterReponse) {
    try {
      await removeMaster(Number(item.id));
      setData((prevData) => prevData.filter((master) => master.id !== item.id));
    } catch (err) {
      console.error(err instanceof Error ? err.message : err);
    }
  }

  function renderMasterHead() {
    return tableHead.map((item) => <th key={item}>{item}</th>);
  }

  function renderMasterAddress(addresses) {
    if (addresses && addresses.length > 0) {
      return addresses.map((address, index) => (
        <React.Fragment key={index}>
          <td>{address.country}</td>
          <td>{address.region}</td>
          <td>{address.address}</td>
        </React.Fragment>
      ));
    } else {
      return (
        <React.Fragment>
          <td>-</td>
          <td>-</td>
          <td>-</td>
        </React.Fragment>
      );
    }
  }

  function renderMasterValues() {
    if (data.length > 0) {
      return data?.map((item, index) => {
        const bachelor = item?.education?.map((edu) => edu.bachelor);
        const article = item?.education?.map((edu) => edu.articles);
        const faculty = item?.education?.map((edu) => edu.faculty);
        return (
          <tr key={index}>
            <td>
              <Button
                color="light"
                children={<i className="bi bi-trash3"></i>}
                onClick={() => handleDelete(item)}
              />
              <Button
                color="light"
                className="mx-2"
                onClick={() => openUpdateModal(item, "triggerUpdateButtons")}
                children={<i className="bi bi-pencil-fill"></i>}
              />
            </td>
            <td>{item?.id}</td>
            <td>{item?.firstName}</td>
            <td>{item?.lastName}</td>
            <td>{item?.middleName}</td>
            <td>{item?.passportNumber}</td>
            <td>{item?.jshshr}</td>
            <td>{item?.dateOfBirth?.slice(0, 10)}</td>
            <td>{item?.gender}</td>
            <td>{item?.nationality}</td>
            <td>{item?.email}</td>
            <td>{item?.phoneNumber}</td>
            <td>{item?.parentPhoneNumber}</td>
            {renderMasterAddress(item?.addresses)}
            {renderMasterEducation(item?.education)}
            {renderMasterBachelor(bachelor)}
            {renderMasterArticle(article)}
            {renderMasterFaculty(faculty)}
          </tr>
        );
      });
    } else {
      return (
        <tr>
          <td colSpan={13} className="text-center">
            No data found!
          </td>
        </tr>
      );
    }
  }

  async function downloadReport() {
    const filename = await generateXlsxFile(data);
    window
      .open(
        `http://localhost:9000/Masters/download/sheets/${filename}`,
        "_blank"
      )
      ?.focus();
  }

  useEffect(() => {
    fetchMasters();
    setData(masters);
    renderMasterValues();
  }, [masters]);

  return (
    <>
      <h6>Magistrlar ro'yxati</h6>
      <div className="my-3 d-flex gap-4 align-items-center">
        <Button
          color="light"
          toggleMasterModal="modal"
          targetMasterModal="#triggerCreateButtons"
          children="Yaratish"
        />

        <Button
          color="light"
          onClick={downloadReport}
          children={<i className="bi bi-download"></i>}
        />
        <p>
          <strong>Magistirlar soni :</strong> {data.length}
        </p>
      </div>

      <Table tableHead={renderMasterHead()} tableBody={renderMasterValues()} />

      <MasterCreateModal />
      <MasterUpdateModal />
      <ArticleCreateModal />
      <ArticleUpdateModal />
      <FacultyCreateModal />
      <FacultyUpdateModal />
      <AddressCreateModal />
      <AddressUpdateModal />
      <BachelorCreateModal />
      <BachelorUpdateModal />
      <EducationCreateModal />
      <EducationUpdateModal />
      <ButtonModal type="create" />
      <ButtonModal type="update" />
    </>
  );
};
