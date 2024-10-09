import { HTMLInputTypeAttribute } from "react";

export interface InputProps {
  value?: string;
  className?: string;
  name?: string;
  type?: HTMLInputTypeAttribute;
  id?: string | undefined;
  ariaDescribedby?: string | undefined;
  placeholder?: string | undefined;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
