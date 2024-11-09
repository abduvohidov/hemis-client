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
import { IBachelorModalData } from "../../../shared/api/bachelor/bachelor.types";
import { useLayoutEffect } from "react";
import { IArticleModal } from "../../../shared/api/article/article.types";

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
  setMaster: (master: IMaster) => void;
  updatingMaster: IMaster | null;
}

export const useModalStore = create<IModalStore>((set, _) => {
  return {
    modalData: {},
    updatingMaster: null,
    setMaster: (master: IMaster) =>
      set((state) => ({
        ...state,
        updatingMaster: master,
      })),

    setInputValue: (name, value) =>
      set((state) => ({
        modalData: {
          ...state.modalData,
          [name]: value,
        },
      })),
    createMaster: async (data: IMaster) => {
      try {
        const result = await masterApi.createMaster(data);

        if (result.success) {
          window.location.reload();
          alert("Magistr qo`shildi ✅");
        } else {
          alert(result.message);
          return;
        }
      } catch (error) {
        alert(error);
      }
    },

    createAddress: async (data: IAddress) => {
      try {
        data = { ...data, masterId: Number(data.masterId) };
        const address = await addressApi.create(data);
        if (address.success) {
          window.location.reload();
          alert("Yashash manzili qo'shildi ✅");
        } else {
          alert(address.message);
        }
      } catch (error) {
        alert("Iltimos boshidan urinib ko`ring");
      }
    },

    createEducation: async (data: IEducation) => {
      try {
        // just make revert masterId into number
        data = { ...data, masterId: Number(data.masterId) };
        const result = await educationApi.create(data);
        if (result.success) {
          window.location.reload();
          alert("OTM qo`shildi");
          return;
        }
        alert("Qaytadan urinib ko`ring");
      } catch (error) {
        alert(error);
      }
    },
    createFaculty: async (data: ICreateFacultyProps) => {
      try {
        data = { ...data, masterId: Number(data.masterId) };

        let result = await facultyApi.findOrCreate(data);
        if (result.success) {
          window.location.reload();
          alert("Mutaxassislik qo`shildi ✅");
          return;
        }
        alert("Masterni tanlang va qayta urinib ko`ring");
      } catch (error) {
        alert("Qaytadan urinib ko`ring");
      }
    },
    createArticle: async (data: IArticleModal) => {
      try {
        // masterId have to be number
        data = { ...data, masterId: Number(data.masterId) };
        const result = await articleApi.create(data);
        if (!result.success) return alert(result?.message);
        if (result.success) {
          window.location.reload();
          alert("Maqola qo`shildi ✅");
        }
      } catch (error) {
        console.log(error);

        alert(error);
      }
    },
    createBachelor: async (data: IBachelorModalData) => {
      try {
        // masterId have to be number
        data = { ...data, masterId: Number(data.masterId) };
        const result = await bachelorApi.create(data);
        if (!result.success) return alert(result?.message);
        if (result.success) {
          window.location.reload();
          alert("Tugatilgan OTM qo`shildi ✅");
        }
      } catch (error) {
        alert(error);
      }
    },
  };
});
