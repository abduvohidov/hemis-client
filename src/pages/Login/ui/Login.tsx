import "./Login.css";
import React from "react";
import { Title } from "../../../shared";
import { FormAuthorization } from "../../../widgets";
import LoginLogo from "../../../app/img/login-logo.png";

export const Login: React.FC = () => (
  <section>
    <img src={LoginLogo} alt={"img"} width={"150px"} height={"150px"} />
    <Title children={"Login"} className={"my-3"} />
    <FormAuthorization />
  </section>
);
