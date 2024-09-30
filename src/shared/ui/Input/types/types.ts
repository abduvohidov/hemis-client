import { HTMLInputTypeAttribute } from "react";

export interface InputProps {
	value: string;
	className?: string;
	type?: "text" | "name" | "email" | "password" | "checkbox";
	id?: string | undefined;
	ariaDescribedby?: string | undefined;
	placeholder?: string | undefined;
	handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
