import { MasterState } from "../../features/MasterModal/models/Master";

export interface ModalLayoutFormProps {
  content: Array<any>;
  setFields: (field: keyof MasterState | string, value: string) => void;
}
