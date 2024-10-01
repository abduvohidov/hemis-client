import { StudentTable } from "../../../widgets";
import { Title } from "../../../shared";

export const Admin = () => {
  return (
    <section>
      <div className="container mx-auto">
        <Title children={"Admin Page"} className={"my-5"} />
        <h6>Magistrlar Tablitsasi</h6>
        <StudentTable />
      </div>
    </section>
  );
};
