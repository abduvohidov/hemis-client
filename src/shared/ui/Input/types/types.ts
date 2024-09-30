import { HTMLInputTypeAttribute } from "react";

export interface InputProps {
  className?: string;
  type?: HTMLInputTypeAttribute | undefined;
  id?: string | undefined;
  ariaDescribedby?: string | undefined;
  placeholder?: string | undefined;
}
