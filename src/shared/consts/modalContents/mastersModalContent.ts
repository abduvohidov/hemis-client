export interface MastersModalContentProps {
  placeholder: string;
  value: string;
  name: string;
  col: 1|2|3|4|5|6|7|8|9|10|11|12;
  isSelect: boolean;
  isFileUpload?: boolean;
  options?: string[];
}

export const mastersModalContent: Array<MastersModalContentProps> = [
  {
    value: "",
    placeholder: "Ism",
    name: "firstName",
    col: 4,
    isSelect: false,
  },
  {
    value: "",
    placeholder: "Familiya",
    name: "lastName",
    col: 4,
    isSelect: false,
  },
  {
    value: "",
    placeholder: "Otasining ismi",
    name: "middleName",
    col: 4,
    isSelect: false,
  },
  {
    value: "",
    placeholder: "Passport Raqam",
    name: "passportNumber",
    col: 4,
    isSelect: false,
  },
  {
    value: "",
    placeholder: "Jshshr",
    name: "jshshr",
    col: 4,
    isSelect: false,
  },
  {
    value: "",
    placeholder: "Tugilgan sanasi",
    name: "dateOfBirth",
    col: 4,
    isSelect: false,
  },
  {
    value: "Jins tanlnang",
    name: "gender",
    col: 4,
    placeholder: "Jins tanlnang",
    isSelect: true,
    options: ["Erkak", "Ayol"],
  },
  {
    value: "Millatini tanlang",
    placeholder: "Millati",
    name: "nationality",
    col: 4,
    isSelect: true,
    options: ["uzbek", "qozoq", "russ"],
  },
  {
    value: "",
    placeholder: "Email",
    name: "email",
    col: 4,
    isSelect: false,
  },
  {
    value: "",
    placeholder: "Telefon Raqami",
    name: "phoneNumber",
    col: 4,
    isSelect: false,
  },
  {
    value: "",
    placeholder: "Ota-ona Telefon Raqami",
    name: "parentPhoneNumber",
    col: 4,
    isSelect: false,
  },
  {
    value: "",
    placeholder: "Parol",
    name: "password",
    col: 4,
    isSelect: false,
  },
  {
    value: "",
    placeholder: "Rasmni yuklang",
    isFileUpload: true,
    isSelect: false,
    name: "avatarUrl",
    col: 12,
  }
];
