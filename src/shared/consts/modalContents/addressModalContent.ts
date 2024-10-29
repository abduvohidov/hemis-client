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
    options: ["O'zbekiston", "Rossiya", "Qozogʻiston"],
  },
  {
    isSelect: true,
    name: "region",
    placeholder: "Viloyatni tanlang",
    options: [
      "Toshkent",
      "Toshkent viloyati",
      "Navoiy",
      "Samarqand",
      "Buxoro",
      "Andijon",
      "Fargʻona",
      "Namangan",
      "Qarshi",
      "Xiva",
      "Urganch",
      "Termiz",
      "Moskva",
      "Sankt-Peterburg",
      "Nursulton",
      "Almaty",
    ],
  },
  {
    isSelect: false,
    name: "address",
    placeholder: "Manzil boyicha",
  },
];
