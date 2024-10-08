import React, { useEffect, useState } from "react";
import { Table } from "../../../shared/ui/Table";
import { Button, IStudentReponse, studentApi } from "../../../shared/index.ts";
import { tableHead } from "../model/tableHead.ts";
import { StudentModal } from "../../../features/StudentModal";
import { removeStudent, findStudents, downloadXlsxFile } from "../lib";

export const StudentTable: React.FC = () => {
  const [data, setData] = useState<IStudentReponse[] | null>(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        await findStudents({ setData });
      } catch (err) {
        console.error("Error fetching students:", err.message);
      }
    };
    fetchStudents();
  }, []);

  async function createStudent(studentData: any): Promise<void> {
    try {
      const res = await studentApi.createStudent(studentData);
      console.log(res)
      await findStudents({ setData });
    } catch (err) {
      console.error("Error creating student:", err.message);
    }
  }

  function renderStudentHead() {
    return tableHead.map((item) => <th key={item}>{item}</th>);
  }

  function renderStudentValues() {
    if (data) {
      return data.map((item, index) => (
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
        </tr>
      ));
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

  return (
    <>
      <div className={"my-3"}>
        <Button
          color={"light"}
          className={"mx-2"}
          toggleStudentModal="modal"
          targetStudentModal="#exampleStudentModal"
          children={"Yaratish"}
        />
        <Button
          color={"light"}
          className={"mx-2"}
          onClick={downloadXlsxFile}
          children={<i className="bi bi-download"></i>}
        />
      </div>

      <Table
        tableHead={renderStudentHead()}
        tableBody={renderStudentValues()}
      />

      <StudentModal onSubmit={createStudent} />
    </>
  );
};
