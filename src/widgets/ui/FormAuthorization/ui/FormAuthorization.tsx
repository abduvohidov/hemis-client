import React from "react";
import { Button, Input, Label } from "../../../../shared";
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
    <Button
      type="submit"
      color={"primary"}
      className="w-100 mt-4"
      children="Login"
    />
  </form>
);
