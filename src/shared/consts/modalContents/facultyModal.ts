export interface FacultyModalContentProps {
  placeholder: string;
  value: string;
  name: string;
  isSelect: boolean;
  options?: string[];
}

export const Faculty_Modal_Content: Array<FacultyModalContentProps> = [
  {
    value: "",
    isSelect: true,
    name: "name",
    placeholder: "Fakultet",
    options: ["IT", "Bussines"],
  },
];
