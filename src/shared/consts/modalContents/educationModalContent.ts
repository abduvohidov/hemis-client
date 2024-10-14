export interface EducationModalContentProps {
  placeholder: string;

  name: string;
  isSelect: boolean;
  options?: string[];
}

export const Education_Modal_Content: Array<EducationModalContentProps> = [
  {
    isSelect: true,
    name: "currentSpecialization",
    placeholder: "Sohani tanlang",
    options: ["IT", "Business", "TAMAM"],
  },
  {
    isSelect: true,
    name: "course",
    placeholder: "Kursni tanlang",
    options: ["1", "2", "3", "4"],
  },
  {
    isSelect: true,
    name: "paymentType",
    placeholder: "Tolov turini tanlang",
    options: ["Kredit", "Nasiya", "Naxt", "Qarz", "Grant"],
  },
  {
    isSelect: true,
    name: "entryYear",
    placeholder: "Kirgan yil",
    options: ["2020/2021", "2021/2022", "2022/2023", "2023/2024", "2024/2025"],
  },
  {
    isSelect: true,
    name: "educationForm",
    placeholder: "Ta'lim turi",
    options: ["Sirtqi", "Kundizgi", "Ertalapki"],
  },
  {
    isSelect: true,
    name: "languageCertificate",
    placeholder: "Til sertificat",
    options: ["IELTS", "TOIFEL", "DUALINGO"],
  },
  {
    isSelect: true,
    name: "semester",
    placeholder: "Oqiyotgan semestr",
    options: ["1", "2", "3", "4", "5", "6"],
  },
  {
    isSelect: false,
    name: "scientificSupervisor",
    placeholder: "Ilmiy rahbar ismi",
  },
  {
    isSelect: false,
    name: "scientificAdvisor",
    placeholder: "Ilmiy maslahatchi ismi",
  },
  {
    isSelect: false,
    name: "internshipSupervisor",
    placeholder: "Amaliyot rahbar ismi",
  },
  {
    isSelect: false,
    name: "internalReviewer",
    placeholder: "Ichiki taqsischi",
  },
  {
    isSelect: false,
    name: "externamReviewer",
    placeholder: "Tashqi taqsischi",
  },
  {
    isSelect: false,
    name: "thesisTopic",
    placeholder: "Thesis Topic",
  },
  {
    isSelect: true,
    name: "academicLeave",
    placeholder: "Akademik dam",
    options: ["Olgan", "Olmagan"],
  },
];
