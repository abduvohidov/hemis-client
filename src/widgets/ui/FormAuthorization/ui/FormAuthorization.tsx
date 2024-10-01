import React, { useState } from "react";
import { useLoginStore } from "../model/loginModel";
import { FormAuthorizationProps } from "../types/types";
import { Button, Input, Label } from "../../../../shared/index";

export const FormAuthorization: React.FC<FormAuthorizationProps> = ({
  className,
}) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const login = useLoginStore((state: { login: Function }) => state.login);

  function clearForm() {
    setEmail("");
    setPassword("");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    await login({ email, password });

    const { error } = useLoginStore.getState();

    if (error) {
      alert(error);
    } else {
      alert("Login successful!");
    }
    clearForm();
  }

  return (
    <form className={`w-25 ${className}`} onSubmit={handleSubmit}>
      <div className="mb-3">
        <Label children={"Email"} />
        <Input
          placeholder={"Enter your email address"}
          type="email"
          value={email}
          handleChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div className="d-flex flex-column">
        <Label children={"Password"} />
        <Input
          placeholder={"Enter your email password"}
          value={password}
          type="password"
          handleChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setPassword(e.target.value);
          }}
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
