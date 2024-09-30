import React from "react";
import { Input, Label } from "../../../../shared";
import { FormAuthorizationProps } from "../types/types";

export const FormAuthorization: React.FC<FormAuthorizationProps> = ({
  className,
}) => (
  <form className={`w-25 ${className}`}>
    <div className="mb-3">
      <Label children={"Email"} />
      <Input placeholder={"Enter your email address"} />
    </div>
    <div className="d-flex flex-column">
      <Label children={"Password"} />
      <Input placeholder={"Enter your email password"} />
    </div>
    <button type="submit" className="btn btn-primary mt-4">
      Submit
    </button>
  </form>
);
