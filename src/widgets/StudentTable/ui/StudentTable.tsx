import { Table } from "../../../shared/ui/Table";
import { tableHead } from "../model/tableHead.ts";
import React, { useEffect, useState } from "react";
import { StudentModal } from "../../../features/StudentModal";
import { useFormStore } from "../../FilterForm/model/formStore.ts";
import { removeStudent, findStudents, downloadXlsxFile } from "../lib";
import { Button, IStudentReponse, studentApi } from "../../../shared/index.ts";

export const StudentTable: React.FC = () => {
  const students = useFormStore((state) => state.students);
  const [data, setData] = useState<IStudentReponse[]>([]);

  const fetchStudents = async () => {
    await findStudents({ setData });
  };

  async function createStudent(studentData: any): Promise<void> {
    try {
      await studentApi.createStudent(studentData);
      await fetchStudents();
    } catch (err) {
      console.error("Error creating student:", err.message);
    }
  }

  async function handleDelete(item: IStudentReponse) {
    try {
      await removeStudent(item.id);
      setData((prevData) =>
        prevData.filter((student) => student.id !== item.id)
      );
    } catch (err) {
      console.error("Error deleting student:", err.message);
    }
  }

  function renderStudentHead() {
    return tableHead.map((item) => <th key={item}>{item}</th>);
  }

  function renderStudentValues() {
    if (data.length > 0) {
      return data.map((item, index) => (
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

  useEffect(() => {
    setData(students);
  }, [students]);

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
