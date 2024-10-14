export interface BachelorModalContentProps {
  placeholder: string;
  value: string;
  name: string;
  isSelect: boolean;
  options?: string[];
}

export const Bachelor_Modal_Content: Array<BachelorModalContentProps> = [
  {
    value: "",
    isSelect: false,
    name: "previousUniversity",
    placeholder: "Tugatgan OTM nomi",
  },
  {
    value: "",
    isSelect: true,
    name: "graduationYear",
    placeholder: "Tugatgan yili",
    options: ["2024", "2023", "2022"],
  },
  {
    value: "",
    isSelect: false,
    name: "diplomaNumber",
    placeholder: "Diplom raqami",
  },
  {
    value: "",
    isSelect: false,
    name: "previousSpecialization",
    placeholder: "Tugatgan mutaxasisligi",
  },
];