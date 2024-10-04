import React from "react";
import { Button } from "../../../shared";
import { DashboardButtonPorps } from "../types";
import { Modal } from "../../Modal";

export const DashboardButtons: React.FC<DashboardButtonPorps> = (props) => {
  const { className } = props;

  function createUser() {}

  function downloadXlsxFile() {
    window.location.href = "http://localhost:9000/students/download/sheets";
  }

  return (
    <div className={className}>
      <Button
        color={"light"}
        className={"mx-2"}
        toggleModal="modal"
        targetModal="#exampleModal"
        onClick={createUser}
        children={"Yaratish"}
      />
      <Button
        color={"light"}
        className={"mx-2"}
        onClick={downloadXlsxFile}
        children={<i className="bi bi-download"></i>}
      />

      <Modal />
    </div>
  );
};
