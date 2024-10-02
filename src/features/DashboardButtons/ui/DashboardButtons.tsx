import React from "react";
import { Button } from "../../../shared";
import { DashboardButtonPorps } from "../types";

export const DashboardButtons: React.FC<DashboardButtonPorps> = (props) => {
  const { className } = props;

  function createUser() {
    return alert("hello");
  }

  function downloadXlsxFile() {
    window.location.href = "http://localhost:9000/students/download/sheets";
  }

  return (
    <div className={className}>
      <Button
        color={"light"}
        className={"mx-2"}
        onClick={createUser}
        children={"Yaratish"}
      />
      <Button
        color={"light"}
        className={"mx-2"}
        onClick={downloadXlsxFile}
        children={<i className="bi bi-download"></i>}
      />
    </div>
  );
};
