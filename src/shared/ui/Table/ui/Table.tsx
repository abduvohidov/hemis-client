import React from "react";
import "./Table.css";

interface ITable {
  tableHead: React.ReactNode[];
  tableBody: React.ReactNode[] | React.ReactNode | string;
}

export const Table: React.FC<ITable> = (props) => {
  return (
    <div className={"table-wrapper"}>
      <table className={"table"}>
        <thead>
          <tr>{props.tableHead}</tr>
        </thead>
        <tbody>{props.tableBody}</tbody>
      </table>
    </div>
  );
};
