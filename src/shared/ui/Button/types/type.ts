import { ReactNode } from "react";

export interface ButtonProps {
  className?: string;
  children?: string | ReactNode;
  color?: string;
  type?: "submit" | "reset" | "button" | undefined;
  toggleMasterModal?: string;
  targetMasterModal?: string;
  closeModal?: string;
  onChange?: () => void;
  onClick?: () => void;
}
