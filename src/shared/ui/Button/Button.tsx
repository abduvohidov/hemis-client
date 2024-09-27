import React from "react";

interface IButton {
  type: "submit" | "reset" | "button" | undefined;
  children: string;
  onClick?: () => void;
}

export const Button: React.FC<IButton> = (props) => {
  const { children, type, onClick } = props;
  return (
    <button type={type} className={"btn btn-primary ms-2"} onClick={onClick}>
      {children}
    </button>
  );
};
