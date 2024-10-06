import { create } from "zustand";
import {
  addressApi,
  articleApi,
  bachelorApi,
  educationApi,
  facultyApi,
  IStudent,
  studentApi,
} from "../../../shared";

interface FormState {
  students: any[];
  formData: Record<string, string>;
  setInputValue: (name: string, value: string) => void;
  filterByStudent: (formData: any) => any;
  filterByEducation: (formData: any) => any;
  filterByBachelor: (formData: any) => any;
  filterByFaculty: (formData: any) => any;
  filterByAddress: (formData: any) => any;
  filterByArticle: (formData: any) => any;
  filterData: (formData: any) => any;
}

export const useFormStore = create<FormState>((set, get) => ({
  students: [],
  formData: {},
  setInputValue: (name, value) =>
    set((state) => ({
      formData: {
        ...state.formData,
        [name]: value,
      },
    })),

  filterByStudent: async (formData: Record<string, string>) => {
    const result: any = await studentApi.getStudentsByFilter(
      formData as Partial<IStudent>
    );
    console.log("student : " + JSON.stringify(result.data));
    return result.data;
  },
  filterByEducation: async (formData: Record<string, string>) => {
    const result: any = await educationApi.filter(formData);
    console.log("education : " + JSON.stringify(result.data));
    return result.data;
  },
  filterByBachelor: async (formData: Record<string, string>) => {
    const result: any = await bachelorApi.filter(formData);
    console.log("bachelor : " + JSON.stringify(result.data));
    return result.data;
  },
  filterByFaculty: async (formData: Record<string, string>) => {
    const result: any = await facultyApi.getByName(formData["facultyName"]);
    console.log("faculty : " + JSON.stringify(result.data));
    return result.data;
  },
  filterByAddress: async (formData: Record<string, string>) => {
    const result: any = await addressApi.filter(formData);
    console.log("address : " + JSON.stringify(result.data));
    return result.data;
  },
  filterByArticle: async (formData: Record<string, string>) => {
    const result: any = await articleApi.filter(formData);
    console.log("article : " + JSON.stringify(result.data));
    return result.data;
  },

  // Filter data function that triggers all filters
  filterData: async (formData: Record<string, string>) => {
    try {
      // Run all filters concurrently
      const [
        studentResults,
        educationResults,
        bachelorResults,
        facultyResults,
        addressResults,
        articleResults,
      ] = await Promise.all([
        get().filterByStudent(formData),
        get().filterByEducation(formData),
        get().filterByBachelor(formData),
        get().filterByFaculty(formData),
        get().filterByAddress(formData),
        get().filterByArticle(formData),
      ]);

      // Merge all student results into one array
      const allResults = [
        ...studentResults,
        ...educationResults,
        ...bachelorResults,
        ...facultyResults,
        ...addressResults,
        ...articleResults,
      ];
      console.log("formData : " + formData);
      // Update the state with the merged results
      set((state) => ({
        students: [...studentResults],
      }));
    } catch (error) {
      console.error("Error filtering data", error);
    }
  },
}));
