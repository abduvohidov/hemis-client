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
    placeholder: "Fakultetni tanlang",
    options: [
      "Matematika",
      "Amaliy matematika va intellektual texnologiyalar",
      "Fizika",
    ],
  },
  {
    isSelect: true,
    name: "course",
    placeholder: "Kursni tanlang",
    options: ["1", "2", "3"],
  },
  {
    isSelect: true,
    name: "paymentType",
    placeholder: "Tolov turini tanlang",
    options: ["Ko`ntrakt", "Grant"],
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
    options: ["Sirtqi", "Kunduzgi", "Kechgi"],
  },
  {
    isSelect: true,
    name: "languageCertificate",
    placeholder: "Til sertificat",
    options: ["IELTS", "TOIFEL", "DUALINGO", "CEFR"],
  },
  {
    isSelect: true,
    name: "semester",
    placeholder: "O`qiyotgan semestr",
    options: ["1", "2", "3", "4", "5", "6", "tugatgan"],
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
    placeholder: "Ichki taqrizchi",
  },
  {
    isSelect: false,
    name: "externamReviewer",
    placeholder: "Tashqi taqrizchi",
  },
  {
    isSelect: false,
    name: "thesisTopic",
    placeholder: "Dissertatsiya mavzusi",
  },
  {
    isSelect: true,
    name: "academicLeave",
    placeholder: "Akademik dam",
    options: ["Olgan", "Olmagan"],
  },
  {
    isSelect: false,
    name: "scientificInternshipPlace",
    placeholder: "Ilmiy amaliyot o'tash joyi",
  },
];
