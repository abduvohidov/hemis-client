import { ReactNode } from "react";

export interface ButtonProps {
  className?: string;
  children?: string | ReactNode;
  color?: string;
  type?: "submit" | "reset" | "button" | undefined;
  toggleMasterModal?: string;
  targetMasterModal?: string;
  onChange?: () => void;
  onClick?: () => void;
}
