import { MasterState } from "../../features/MasterModal/models/Master";

export interface ModalLayoutFormProps {
  content: Array<any>;
  handleChange(e: React.FormEvent): void;
}
