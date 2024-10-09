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
  //done
  filterByStudent: async (formData: Record<string, string>) => {
    const result: any = await studentApi.getStudentsByFilter(
      formData as Partial<IStudent>
    );
    return result.data;
  },
  //done
  filterByEducation: async (formData: Record<string, string>) => {
    const result: any = await educationApi.filter(formData);
    return result.data;
  },
  filterByBachelor: async (formData: Record<string, string>) => {
    const result: any = await bachelorApi.filter(formData);
    return result.data;
  },
  filterByFaculty: async (formData: Record<string, string>) => {
    const result: any = await facultyApi.getByName(formData.name);
    return result.data;
  },
  filterByAddress: async (formData: Record<string, string>) => {
    console.log(formData);
    const result: any = await addressApi.filter(formData);
    console.log(result.data);
    return result.data;
  },
  //done
  filterByArticle: async (formData: Record<string, string>) => {
    const result: any = await articleApi.filter(formData);
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
      // Update the state with the merged results
      set((state) => ({
        students: [...allResults],
      }));
    } catch (error) {
      console.error("Error filtering data", error);
    }
  },
}));
