import React, { useEffect, useState } from "react";
import users from "../api/users.api";
import { Table } from "../../../../entities/Table";
import { UserProps } from "../types/type";

export const UserTable: React.FC = () => {
  const [data, setData] = useState<UserProps[]>([]);
  const [keys, setKeys] = useState<string[]>([]);

  async function findUsersKeys() {
    const response = await users.getUsers();
    const result = await response.data;

    if (result.length > 0) {
      const keys = Object.keys(result[0]);
      setKeys(keys);
      setData(result);
    }
  }

  useEffect(() => {
    findUsersKeys();
  }, []);

  function renderUserTableHeaders() {
    return keys.map((key, index) => (
      <th key={index} scope="col">
        {key.charAt(0).toUpperCase() + key.slice(1)}
      </th>
    ));
  }

  function renderUserValues() {
    return data.map((user, index) => (
      <tr key={index}>
        {keys.map((key) => (
          <td key={key}>{(user as any)[key]}</td>
        ))}
      </tr>
    ));
  }

  return (
    <Table
      tableHead={renderUserTableHeaders()}
      tableBody={renderUserValues()}
    />
  );
};
