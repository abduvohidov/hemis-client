import React, { useEffect, useState } from "react";
import students from "../../../../shared/api/student/students.api";
import { Table } from "../../../../entities/Table";
import { Student } from "../types/type";

export const StudentTable: React.FC = () => {
  const [data, setData] = useState<Student[]>([]);
  const tableHead = [
    "#",
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

  async function findStudentsKeys() {
    const response = await students.getStudents();
    const result = await response.data.data;
    setData(result);
  }

  useEffect(() => {
    findStudentsKeys();
  }, []);

  function renderStudentValues() {
    return data.map((item, index) => {
      return (
        <tr key={index}>
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
