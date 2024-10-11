import { Table } from "../../../shared/ui/Table/index.ts";
import { tableHead } from "../model/tableHead.ts";
import React, { useEffect, useState } from "react";
import { MasterModal } from "../../../features/MasterModal/index.ts";
import { useFormStore } from "../../FilterForm/model/formStore.ts";
import { removeMaster, findMasters, downloadXlsxFile } from "../lib/index.ts";
import { Button, IMasterReponse, MasterApi } from "../../../shared/index.ts";

export const MasterTable: React.FC = () => {
  const masters = useFormStore((state) => state.Masters);
  const [data, setData] = useState<IMasterReponse[]>([]);

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

  async function createMaster(MasterData: any): Promise<void> {
    try {
      await MasterApi.createMaster(MasterData);
      await fetchMasters();
    } catch (err) {
      console.error(err.message);
    }
  }

  async function handleDelete(item: IMasterReponse) {
    try {
      await removeMaster(item.id);
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
          <td>Country not available</td>
          <td>Region not available</td>
          <td>Address not available</td>
        </React.Fragment>
      );
    }
  }

  function renderMasterValues() {
    if (data.length > 0) {
      return data?.map((item, index) => {
        return (
          <tr key={index}>
            <td>
              <Button
                color={"light"}
                children={<i className="bi bi-trash3"></i>}
                onClick={() => handleDelete(item)}
              />
              <Button
                color={"light"}
                className={"mx-2"}
                children={<i className="bi bi-pencil-fill"></i>}
              />
            </td>
            <td>{item?.id}</td>
            <td>{item?.firstName}</td>
            <td>{item?.lastName}</td>
            <td>{item?.middleName}</td>
            <td>{item?.passportNumber}</td>
            <td>{item?.jshshr}</td>
            <td>{item?.dateOfBirth}</td>
            <td>{item?.gender}</td>
            <td>{item?.nationality}</td>
            <td>{item?.email}</td>
            <td>{item?.phoneNumber}</td>
            <td>{item?.parentPhoneNumber}</td>
            {renderMasterAddress(item?.addresses)}
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

  useEffect(() => {
    fetchMasters();
    setData(masters);
    renderMasterValues();
  }, [masters]);

  return (
    <>
      <h6>Magistrlar Tablitsasi</h6>
      <div className={"my-3"}>
        <Button
          color={"light"}
          className={"mx-2"}
          toggleMasterModal="modal"
          targetMasterModal="#exampleMasterModal"
          children={"Yaratish"}
        />

        <Button
          color={"light"}
          className={"mx-2"}
          onClick={downloadXlsxFile}
          children={<i className="bi bi-download"></i>}
        />
      </div>

      <Table tableHead={renderMasterHead()} tableBody={renderMasterValues()} />

      <MasterModal onSubmit={createMaster} />
    </>
  );
};
