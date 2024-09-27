import React from "react";
import { Input } from "../../shared/ui/Input/Input";
import { Button } from "../../shared/ui/Button/Button";

interface ISubmitForm {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  onKeyDown: () => void;
  value?: string;
}

export const SubmitForm: React.FC<ISubmitForm> = (props) => {
  const { onChange, onClick, onKeyDown, value } = props;

  return (
    <div className={"d-flex align-items-center justify-content-center mt-4"}>
      <Input
        placeholder={"Добавить задачу..."}
        onChange={onChange}
        value={value}
        onKeyDown={onKeyDown}
      />
      <Button type={"submit"} children={"+ Добавить"} onClick={onClick} />
    </div>
  );
};
