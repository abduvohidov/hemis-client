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
  MasterApi,
} from "../../../shared";

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
        const master = await MasterApi.createMaster(data);
        if (typeof master === "string") {
          alert(master);
          return;
        } else if (!master) {
          alert("Some error");
          console.log(master);
          return;
        }
        console.log(master);
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
    createFaculty: async (data: any) => {
      try {
        const faculty = await facultyApi.create(data);
        const masterId = { masterId: Number(data?.masterId) };
        // get get education by masterId
        const updatedData = { facultyId: Number(faculty.id) };
        // await educationApi.udpate(2 add educationID here, updatedData);
        if (typeof faculty === "string") {
          alert(faculty);
          return;
        } else if (!faculty) {
          alert("Some error");
          return;
        }
        console.log(faculty);
      } catch (error) {
        alert(error);
      }
    },
    createArticle: async (data: any) => {
      try {
        const article = await articleApi.create(data);
        const masterId = { masterId: Number(data?.masterId) };
        // get get article by masterId
        const updatedData = { articleId: Number(article.id) };
        // await educationApi.udpate(2 add educationID here, updatedData);
        if (typeof article === "string") {
          alert(article);
          return;
        } else if (!article) {
          alert("Some error");
          return;
        }
      } catch (error) {
        alert(error);
      }
    },
    createBachelor: async (data: any) => {
      try {
        const bachelor = await bachelorApi.create(data);
        const masterId = { masterId: Number(data?.masterId) };
        // get get bachelor by masterId
        const updatedData = { bachelorId: Number(bachelor.id) };
        // await educationApi.udpate(2 add educationID here, updatedData);
        if (typeof bachelor === "string") {
          alert(bachelor);
          return;
        } else if (!bachelor) {
          alert("Some error");
          return;
        }
      } catch (error) {
        alert(error);
      }
    },
  };
});
