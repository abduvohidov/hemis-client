export interface FacultyModalContentProps {
  placeholder: string;
  name: string;
  isSelect: boolean;
  options?: string[];
}

export const Faculty_Modal_Content: Array<FacultyModalContentProps> = [
  {
    isSelect: true,
    name: "name",
    placeholder: "Fakultet",
    options: [],
  },
];

export const Faculty_Specizialization_Content = {
  "Matematika": ["Matematik analiz", "Algebra va funksional analiz" , "Geometriya va topologiya", "Differensial tenglamalar va matematik fizika", "Ehtimollar nazariyasi va matematik statistika","Mexanika va matematik modellashtirish"],
  "Amaliy matematika va intellektual texnologiyalar": ["Sun'iy intellekt kafedrasi", " Amaliy matematika va kompyuter tahlili", "Algoritmlar va dasturlash texnologiyalari", "Axborot xavfsizligi", "Hisoblash matematikasi va axborot tizimlari" ],
  "Fizika": ["Nazariy fizika" ,"Yadro fizikasi" ," Yarimo'tkazgichlar va polimerlar fizikasi" ,"Fotonika" , "Umumiy fizika", "Astronomiya va astrofizika"],
};