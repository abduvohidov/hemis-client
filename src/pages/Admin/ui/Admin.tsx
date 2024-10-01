import { StudentTable } from "../../../widgets";
import { Title } from "../../../shared";
import { UserTable } from "../../../widgets/ui/UserTable";

export const Admin = () => {
  return (
    <section>
      <div className="container mx-auto">
        <Title children={"Admin Page"} className={"my-5"} />
        <h6>Students</h6>
        <StudentTable />

        <h6>Users</h6>
        <UserTable />
      </div>
    </section>
  );
};
