import { Student } from "../types/type";
import React, { useEffect, useState } from "react";
import { Table } from "../../../entities/Table";
import { Button, studentApi } from "../../../shared/index.js";

export const StudentTable: React.FC = () => {
  const [data, setData] = useState<Student[]>([]);
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

  async function findStudents() {
    const response = await studentApi.getAllStudents();
    const result = await response.data;
    setData(result);
  }

  async function removeStudent(id: any) {
    await studentApi.deleteStudent(id);
  }

  async function updateStudent(id: any, data: Student) {}

  useEffect(() => {
    findStudents();
    renderStudentValues();
  }, [data]);

  function renderStudentValues() {
    return data.map((item, index) => {
      return (
        <tr key={index}>
          <td>
            <Button
              color={"light"}
              children={<i className="bi bi-trash3"></i>}
              onClick={() => removeStudent(item.id)}
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
