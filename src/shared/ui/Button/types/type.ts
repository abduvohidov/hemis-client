import { ReactNode } from "react";

export interface ButtonProps {
  className?: string;
  children?: string | ReactNode;
  color?: string;
  type?: "submit" | "reset" | "button" | undefined;
  toggleModal?: string;
  targetModal?: string;
  onChange?: () => void;
  onClick?: () => void;
}
