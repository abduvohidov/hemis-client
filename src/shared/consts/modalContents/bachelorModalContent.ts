export interface BachelorModalContentProps {
  placeholder: string;
  name: string;
  isSelect: boolean;
  options?: string[];
}

export const Bachelor_Modal_Content: Array<BachelorModalContentProps> = [
  {
    isSelect: false,
    name: "previousUniversity",
    placeholder: "Tugatgan OTM nomi",
  },
  {
    isSelect: true,
    name: "graduationYear",
    placeholder: "Tugatgan yili",
    options: ["2024", "2023", "2022"],
  },
  {
    isSelect: false,
    name: "diplomaNumber",
    placeholder: "Diplom raqami",
  },
  {
    isSelect: false,
    name: "previousSpecialization",
    placeholder: "Tugatgan mutaxasisligi",
  },
];
