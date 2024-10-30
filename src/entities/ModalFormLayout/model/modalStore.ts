import { create } from "zustand";
import {
  addressApi,
  articleApi,
  bachelorApi,
  educationApi,
  facultyApi,
  IAddress,
  IArticle,
  IBachelor,
  IEducation,
  IFaculty,
  IMaster,
  masterApi,
} from "../../../shared";
import { ICreateFacultyProps } from "./types";

export interface IModalMaster {
  id: number;
  firstName: string;
  lastName: string;
}

export interface IModalStore {
  modalData: Record<string, string>;
  createMaster: (data: IMaster) => Promise<void>;
  createAddress: (data: IAddress) => Promise<void>;
  createEducation: (data: IEducation) => Promise<void>;
  createFaculty: (data: IFaculty) => Promise<void>;
  createArticle: (data: IArticle) => Promise<void>;
  createBachelor: (data: IBachelor) => Promise<void>;
  setInputValue: (name: string, value: string) => void;
}

export const useModalStore = create<IModalStore>((set, _) => {
  return {
    modalData: {},
    setInputValue: (name, value) =>
      set((state) => ({
        modalData: {
          ...state.modalData,
          [name]: value,
        },
      })),
    createMaster: async (data: IMaster) => {
      try {
        const master = await masterApi.createMaster(data);
        
        if (typeof master === "string") {
          alert(master);
          return;
        } else if (!master) {
          alert("Some error");
          console.log(master);
          return;
        }
      } catch (error) {
        alert(error);
      }
    },
    createAddress: async (data: IAddress) => {
      try {
        data = { ...data, masterId: Number(data.masterId) };
        const address = await addressApi.createUser(data);
        if (typeof address === "string") {
          alert(address);
          return;
        } else if (!address) {
          alert("Some error");
          return;
        }
        console.log(address);
      } catch (error) {
        alert(error);
      }
    },
    createEducation: async (data: IEducation) => {
      try {
        data = { ...data, masterId: Number(data.masterId) };
        console.log(data);
        const address = await educationApi.create(data);
        if (typeof address === "string") {
          alert(address);
          return;
        } else if (!address) {
          alert("Some error");
          return;
        }
        console.log(address);
      } catch (error) {
        alert(error);
      }
    },
    createFaculty: async (data: ICreateFacultyProps) => {
      try {
        let result = await facultyApi.findOrCreate(data);
        if (result.success) {
          window.location.reload();
          alert("Fakultet qo`shildi ✅");
          return;
        }
        alert("Masterni tanlang va qayta urinib ko`ring");
      } catch (error) {
        alert("Qaytadan urinib ko`ring");
      }
    },
    createArticle: async (data: any) => {
      try {
        const article = await articleApi.create(data);
        const education = await educationApi.getByMasterId(
          Number(data?.masterId)
        );
        console.log(Number(article.id));

        if (typeof education === "string") alert(education);
        const updatedData = { articlesId: Number(article.id) };

        await educationApi.udpate(education.id, updatedData);
      } catch (error) {
        console.log(error);

        alert(error);
      }
    },
    createBachelor: async (data: any) => {
      try {
        const bachelor = await bachelorApi.create(data);
        const education = await educationApi.getByMasterId(
          Number(data?.masterId)
        );
        if (typeof education === "string") alert(education);
        const updatedData = { bachelorId: Number(bachelor.id) };

        await educationApi.udpate(education.id, updatedData);
      } catch (error) {
        alert(error);
      }
    },
  };
});
