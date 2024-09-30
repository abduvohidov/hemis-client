export interface ButtonProps {
  className?: string;
  children?: string;
  color?: string;
  onChange?: () => void;
  onClick?: () => void;
  type?: "submit" | "reset" | "button" | undefined;
}
