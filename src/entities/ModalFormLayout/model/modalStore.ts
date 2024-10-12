import { create } from "zustand";
import { addressApi, IAddress, IMaster, MasterApi } from "../../../shared";

export interface IModalMaster {
  id: number;
  firstName: string;
  lastName: string;
}

export interface IModalStore {
  modalData: Record<string, string>;
  createMaster: (data: IMaster) => Promise<void>;
  createAddress: (data: IAddress) => Promise<void>;
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
  };
});
