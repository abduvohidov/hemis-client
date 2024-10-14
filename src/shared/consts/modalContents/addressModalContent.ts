export interface AddressModalContentProps {
  placeholder: string;
  name: string;
  isSelect: boolean;
  options?: string[];
}

export const Address_Modal_Content: Array<AddressModalContentProps> = [
  {
    isSelect: true,
    name: "country",
    placeholder: "Davlatni tanlang",
    options: ["Uzbekiston", "Rossiya", "TAMAM"],
  },
  {
    isSelect: true,
    name: "region",
    placeholder: "Viloyatni tanlang",
    options: ["Toshkent", "Toshkent viloyati", "Navoiy", "Samarqand"],
  },
  {
    isSelect: false,
    name: "address",
    placeholder: "Manzil boyicha",
  },
];
