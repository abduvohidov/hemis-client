import React from "react";
import { Title } from "../../../shared";
import { FormAuthorization } from "../../../widgets";
import "./Login.css";

export const Login: React.FC = () => (
  <section>
    <Title children={"Login"} className={"my-3"} />
    <FormAuthorization />
  </section>
);
