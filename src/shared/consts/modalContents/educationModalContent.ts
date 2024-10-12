export interface EducationModalContentProps {
  placeholder: string;
  value: string;
  name: string;
  isSelect: boolean;
  options?: string[];
}

export const Education_Modal_Content: Array<EducationModalContentProps> = [
  {
    value: "",
    isSelect: true,
    name: "currentSpecialization",
    placeholder: "Sohani tanlang",
    options: ["IT", "Business", "TAMAM"],
  },
  {
    value: "",
    isSelect: true,
    name: "course",
    placeholder: "Kursni tanlang",
    options: ["1", "2", "3", "4"],
  },
  {
    value: "",
    isSelect: true,
    name: "paymentType",
    placeholder: "Tolov turini tanlang",
    options: ["Kredit", "Nasiya", "Naxt", "Qarz", "Grant"],
  },
  {
    value: "",
    isSelect: true,
    name: "entryYear",
    placeholder: "Kirgan yil",
    options: ["2020/2021", "2021/2022", "2022/2023", "2023/2024", "2024/2025"],
  },
  {
    value: "",
    isSelect: true,
    name: "educationForm",
    placeholder: "Ta'lim turi",
    options: ["Sirtqi", "Kundizgi", "Ertalapki"],
  },
  {
    value: "",
    isSelect: true,
    name: "languageCertificate",
    placeholder: "Til sertificat",
    options: ["IELTS", "TOIFEL", "DUALINGO"],
  },
  {
    value: "",
    isSelect: true,
    name: "semester",
    placeholder: "Oqiyotgan semestr",
    options: ["1", "2", "3", "4", "5", "6"],
  },
  {
    value: "",
    isSelect: false,
    name: "scientificSupervisor",
    placeholder: "Ilmiy rahbar ismi",
  },
  {
    value: "",
    isSelect: false,
    name: "scientificAdvisor",
    placeholder: "Ilmiy maslahatchi ismi",
  },
  {
    value: "",
    isSelect: false,
    name: "internshipSupervisor",
    placeholder: "Amaliyot rahbar ismi",
  },
  {
    value: "",
    isSelect: false,
    name: "internalReviewer",
    placeholder: "Ichiki taqsischi",
  },
  {
    value: "",
    isSelect: false,
    name: "externamReviewer",
    placeholder: "Tashqi taqsischi",
  },
  {
    value: "",
    isSelect: false,
    name: "thesisTopic",
    placeholder: "Thesis Topic",
  },
  {
    value: "",
    isSelect: true,
    name: "academicLeave",
    placeholder: "Akademik dam",
    options: ["Olgan", "Olmagan"],
  },
];
