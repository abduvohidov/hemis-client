import React from "react";
import { Button } from "../../../shared/index.js";
import { useFormStore } from "../../FilterForm/model/formStore.js";
import { Table } from "../../../shared/ui/Table/ui/Table.js";

export const StudentTable: React.FC = () => {
  const students = useFormStore((state) => state.students);
  const tableHead = [
    "#",
    "Id",
    "Ismi",
    "Familiya",
    "Otasini ismi",
    "Passport raqami",
    "JSHSHR",
    "Tug'ilgan sanasi",
    "Jinsi",
    "Millati",
    "Email",
    "Telefon raqami",
    "Ota-ona raqami",
  ];

  function renderStudentHead() {
    return tableHead.map((item) => <th key={item}>{item}</th>);
  }

  function renderStudentValues() {
    return students.map((item, index) => {
      return (
        <tr key={index}>
          <td>
            <Button
              color={"light"}
              children={<i className="bi bi-trash3"></i>}
            />
            <Button
              color={"light"}
              className={"mx-2"}
              children={<i className="bi bi-pencil-fill"></i>}
            />
          </td>
          <td>{item.id}</td>
          <td>{item.firstName}</td>
          <td>{item.lastName}</td>
          <td>{item.middleName}</td>
          <td>{item.passportNumber}</td>
          <td>{item.jshshr}</td>
          <td>{item.dateOfBirth}</td>
          <td>{item.gender}</td>
          <td>{item.nationality}</td>
          <td>{item.email}</td>
          <td>{item.phoneNumber}</td>
          <td>{item.parentPhoneNumber}</td>
        </tr>
      );
    });
  }

  return (
    <Table tableHead={renderStudentHead()} tableBody={renderStudentValues()} />
  );
};
