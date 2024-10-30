import { create } from "zustand";
import {
  addressApi,
  articleApi,
  bachelorApi,
  educationApi,
  facultyApi,
  IMaster,
  masterApi,
} from "../../../shared";

interface FormState {
  Masters: any[];
  formData: Record<string, string>;
  getAllMasters: () => Promise<void>;
  setInputValue: (name: string, value: string) => void;
  filterByMaster: (formData: any) => any;
  filterByEducation: (formData: any) => any;
  filterByBachelor: (formData: any) => any;
  filterByFaculty: (formData: any) => any;
  filterByAddress: (formData: any) => any;
  filterByArticle: (formData: any) => any;
  filterData: (formData: any) => any;
}

export const useFormStore = create<FormState>((set, get) => {
  const getAllMasters = async () => {
    const Masters = await masterApi.getAllMasters();

    set({
      Masters,
    });
  };

  getAllMasters();

  return {
    Masters: [],
    Bachelor: [],
    Education: [],
    Faculty: [],
    Article: [],
    formData: {},
    setInputValue: (name, value) =>
      set((state) => ({
        formData: {
          ...state.formData,
          [name]: value,
        },
      })),
    getAllMasters,
    filterByMaster: async (formData: Record<string, string>) => {
      const result: any = await masterApi.getMastersByFilter(
        formData as Partial<IMaster>
      );
      return result.data;
    },
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
      const result: any = await addressApi.filter(formData);
      return result.data;
    },
    filterByArticle: async (formData: Record<string, string>) => {
      const result: any = await articleApi.filter(formData);
      return result.data;
    },

    // Filter data function that triggers all filters
    filterData: async (formData: Record<string, string>) => {
      try {
        // Run all filters concurrently
        const [
          MasterResults,
          educationResults,
          bachelorResults,
          facultyResults,
          addressResults,
          articleResults,
        ] = await Promise.all([
          get().filterByMaster(formData),
          get().filterByEducation(formData),
          get().filterByBachelor(formData),
          get().filterByFaculty(formData),
          get().filterByAddress(formData),
          get().filterByArticle(formData),
        ]);

        // Merge all Master results into one array
        const allResults = [
          ...MasterResults,
          ...educationResults,
          ...bachelorResults,
          ...facultyResults,
          ...addressResults,
          ...articleResults,
        ];
        // Update the state with the merged results
        set((state) => ({
          Masters: [...allResults],
        }));
      } catch (error) {
        console.error("Error filtering data", error);
      }
    },
  };
});
