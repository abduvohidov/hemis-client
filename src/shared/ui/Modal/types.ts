import { ReactNode } from "react";

export interface ModalProps {
  title: string;
  modalId: string;
  className?: string;
  children?: ReactNode;
  onSave?: () => void;
}
