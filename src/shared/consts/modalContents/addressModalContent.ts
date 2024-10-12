export interface AddressModalContentProps {
  placeholder: string;
  value: string;
  name: string;
  isSelect: boolean;
  options?: string[];
}

export const Address_Modal_Content: Array<AddressModalContentProps> = [
  {
    value: "",
    isSelect: true,
    name: "country",
    placeholder: "Davlatni tanlang",
    options: ["Uzbekiston", "Rossiya", "TAMAM"],
  },
  {
    value: "",
    isSelect: true,
    name: "region",
    placeholder: "Viloyatni tanlang",
    options: ["Toshkent", "Toshkent viloyati", "Navoiy", "Samarqand"],
  },
  {
    value: "",
    isSelect: false,
    name: "address",
    placeholder: "Manzil boyicha",
  },
];
