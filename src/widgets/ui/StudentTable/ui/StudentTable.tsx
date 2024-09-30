import React, { useEffect, useState } from "react";
import students from "../api/students.api";
import { Table } from "../../../../entities/Table";
import { Student } from "../types/type";

export const StudentTable: React.FC = () => {
  const [data, setData] = useState<Student[]>([]);
  const [keys, setKeys] = useState<string[]>([]);

  async function findStudentsKeys() {
    const response = await students.getStudents();
    const result = await response.data;

    if (result.length > 0) {
      const keys = Object.keys(result[0]);
      setKeys(keys);
      setData(result);
    }
  }

  useEffect(() => {
    findStudentsKeys();
  }, []);

  function renderStudentTableHeaders() {
    return keys.map((key, index) => (
      <th key={index} scope="col">
        {key.charAt(0).toUpperCase() + key.slice(1)}
      </th>
    ));
  }

  function renderStudentValues() {
    return data.map((student, index) => (
      <tr key={index}>
        {keys.map((key) => (
          <td key={key}>{(student as any)[key]}</td>
        ))}
      </tr>
    ));
  }

  return (
    <Table
      tableHead={renderStudentTableHeaders()}
      tableBody={renderStudentValues()}
    />
  );
};
