import React from "react";
import { StudentTable } from "../../../widgets";
import { Title } from "../../../shared";
import { DashboardButtons } from "../../../features/DashboardButtons";
import { FilterForm } from "../../../widgets/FilterForm";

export const Admin: React.FC = () => {
  return (
    <section>
      <div className="container mx-auto  h-auto">
        <Title children={"Admin Page"} className={"my-5"} />
        <div className="row">
          <div className="col-12">
            <FilterForm />
          </div>
        </div>

        <DashboardButtons className={"my-5"} />
        <h6>Magistrlar Tablitsasi</h6>
        <StudentTable />
      </div>
    </section>
  );
};
