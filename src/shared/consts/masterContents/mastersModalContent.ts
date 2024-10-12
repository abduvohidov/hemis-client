export interface MastersModalContentProps {
  placeholder: string;
  value: string;
  name: string;
  isSelect: boolean;
  options?: string[];
}

export const mastersModalContent: Array<MastersModalContentProps> = [
  {
    value: "",
    placeholder: "Ism",
    name: "firstName",
    isSelect: false,
  },
  {
    value: "",
    placeholder: "Familiya",
    name: "lastName",
    isSelect: false,
  },
  {
    value: "",
    placeholder: "Otasining ismi",
    name: "middleName",
    isSelect: false,
  },
  {
    value: "",
    placeholder: "Passport Raqam",
    name: "passportNumber",
    isSelect: false,
  },
  {
    value: "",
    placeholder: "Jshshr",
    name: "jshshr",
    isSelect: false,
  },
  {
    value: "",
    placeholder: "Tugilgan sanasi",
    name: "dateOfBirth",
    isSelect: false,
  },
  {
    value: "Jins tanlnang",
    name: "gender",
    placeholder: "Jins tanlnang",
    isSelect: true,
    options: ["Erkak", "Ayol"],
  },
  {
    value: "Millatini tanlang",
    placeholder: "Millati",
    name: "nationality",
    isSelect: true,
    options: ["uzbek", "qozoq", "russ"],
  },
  {
    value: "",
    placeholder: "Email",
    name: "email",
    isSelect: false,
  },
  {
    value: "",
    placeholder: "Telefon Raqami",
    name: "phoneNumber",
    isSelect: false,
  },
  {
    value: "",
    placeholder: "Ota-ona Telefon Raqami",
    name: "parentPhoneNumber",
    isSelect: false,
  },
  {
    value: "",
    placeholder: "Parol",
    name: "password",
    isSelect: false,
  },
];
