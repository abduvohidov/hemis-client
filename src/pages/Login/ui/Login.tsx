import "./Login.css";
import React from "react";
import { Title } from "../../../shared";
import { FormAuthorization } from "../../../widgets";

export const Login: React.FC = () => (
  <section>
    <img
      src={
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRLKFCB5V-pQ5VVa5OtcVQIpOXMrOe6PhTvA&s"
      }
      alt={"img"}
      width={"150px"}
      height={"150px"}
    />
    <Title children={"Login"} className={"my-3"} />
    <FormAuthorization />
  </section>
);
