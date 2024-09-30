import React from "react";

export const Table: React.FC = () => {
  function renderTableHead() {
    
  }
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">First name</th>
          <th scope="col">Last name</th>
          <th scope="col">Middle name</th>
          <th scope="col">Passport number</th>
          <th scope="col">Jshshr</th>
          <th scope="col">Date of birth</th>
          <th scope="col">Gender</th>
          <th scope="col">Nationality</th>
          <th scope="col">Email</th>
          <th scope="col">Phone number</th>
          <th scope="col">Parent phone number</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </table>
  );
};
