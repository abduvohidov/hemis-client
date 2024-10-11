import React from "react";
import { MasterTable } from "../../../widgets";
import { Title } from "../../../shared";
import { FilterForm } from "../../../widgets/FilterForm";

export const Admin: React.FC = () => {
  return (
    <div className="container my-5 mx-auto  h-auto">
      <div className="row my-5">
        <div className="col-12">
          <Title children={"Admin Page"} className={"my-5"} />
          <FilterForm />
        </div>
      </div>
      <MasterTable />
    </div>
  );
};
