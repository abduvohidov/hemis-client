import React from "react";
import { MasterTable } from "../../../widgets";
import { Title } from "../../../shared";
import { FilterForm } from "../../../widgets/FilterForm";
import { useNavigate } from "react-router";
import { useLoginStore } from "../../../widgets/FormAuthorization/model/loginModel";

export const Admin: React.FC = () => {
  const navigate = useNavigate();
  const logout = useLoginStore((state) => state.logout);
  async function handleLogout() {
    navigate("/");
    await logout();
  }
  return (
    <div className="container my-5 mx-auto  h-auto">
      <div className="row my-5">
        <div className="col-12">
          <div className="d-flex align-items-center flex-column mb-4">
            <Title children={"Admin Page"} className={"mt-5"} />
            <button className="logut-btn" onClick={handleLogout}>
              Profildan chiqish
            </button>
          </div>
          <FilterForm />
        </div>
      </div>
      <MasterTable />
    </div>
  );
};
