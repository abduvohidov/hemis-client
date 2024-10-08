import React from "react";
import { StudentTable } from "../../../widgets";
import { Title } from "../../../shared";

export const Admin: React.FC = () => {
  return (
    <section>
      <div className="container mx-auto">
        <Title children={"Admin Page"} className={"my-5"} />
        <StudentTable />
      </div>
    </section>
  );
};
