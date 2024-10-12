import { create } from "zustand";
import { IMaster, MasterApi } from "../../../shared";

export interface IModalStore {
  modalData: Record<string, string>;
  setInputValue: (name: string, value: string) => void;
  createMaster: (data: IMaster) => Promise<void>;
}

export const useModalStore = create<IModalStore>((set, get) => {
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
  };
});
