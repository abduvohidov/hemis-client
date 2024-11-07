import "./FormAuthorization.css";
import React, { useState } from "react";
import { useLoginStore } from "../model/loginModel";
import { FormAuthorizationProps } from "../types/types";
import { Button, Input, Label } from "../../../shared";
import { ManipulatePassword } from "../lib/manipulatePassword";

export const FormAuthorization: React.FC<FormAuthorizationProps> = ({
  className,
}) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordVisibility, setPasswordVisibility] = useState<
    "text" | "password"
  >("password");

  const login = useLoginStore((state: { login: Function }) => state.login);
  function clearForm() {
    setEmail("");
    setPassword("");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    await login({ email, password });

    clearForm();
  }

  return (
    <form className={`w-25 ${className}`} onSubmit={handleSubmit}>
      <div className={"mb-3"}>
        <Label children={"Email"} />
        <Input
          placeholder={"Enter your email address"}
          type={"email"}
          value={email}
          handleChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div className="d-flex flex-column position-relative">
        <Label children={"Password"} />
        <Input
          placeholder={"Enter your email password"}
          value={password}
          type={passwordVisibility}
          handleChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setPassword(e.target.value);
          }}
        />
        <ManipulatePassword
          className="password-changer"
          passwordVisibilty={passwordVisibility}
          setPasswordVisibility={setPasswordVisibility}
        />
      </div>
      <Button
        type="submit"
        color={"primary"}
        className="w-100 mt-4"
        children="Login"
      />
    </form>
  );
};
