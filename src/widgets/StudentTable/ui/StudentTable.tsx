import React, { useEffect, useState } from "react";
import { Table } from "../../../shared/ui/Table";
import { Button, IStudentReponse } from "../../../shared/index.ts";
import { findStudents } from "../lib/findStudents.ts";
import { removeStudent } from "../lib/removeStudent.ts";
import { tableHead } from "../model/tableHead.ts";

export const StudentTable: React.FC = () => {
  const [data, setData] = useState<IStudentReponse[] | []>([]);

  function renderStudentHead() {
    return tableHead.map((item) => <th key={item}>{item}</th>);
  }

  function renderStudentValues() {
    if (data) {
      return data?.map((item, index) => {
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
        );
      });
    } else {
      console.log("Проверь Сервер!");
      return (
        <tr>
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
          <td>0</td>
          <td>Not Found !</td>
          <td>Not Found !</td>
          <td>Not Found !</td>
          <td>Not Found !</td>
          <td>Not Found !</td>
          <td>Not Found !</td>
          <td>Not Found !</td>
          <td>Not Found !</td>
          <td>Not Found !</td>
          <td>Not Found !</td>
          <td>Not Found !</td>
        </tr>
      );
    }
  }

  useEffect(() => {
    findStudents({ setData });
    renderStudentValues();
  }, [data]);

  return (
    <Table tableHead={renderStudentHead()} tableBody={renderStudentValues()} />
  );
};
