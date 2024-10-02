import { ReactNode } from "react";

export interface ButtonProps {
  className?: string;
  children?: string | ReactNode;
  color?: string;
  onChange?: () => void;
  onClick?: () => void;
  type?: "submit" | "reset" | "button" | undefined;
}
