import { create } from "zustand";

export interface MasterState {
  lastName: string;
  firstName: string;
  middleName: string;
  passportNumber: string;
  jshshr: string;
  dateOfBirth: string;
  gender: string;
  nationality: string;
  email: string;
  phoneNumber: string;
  parentPhoneNumber: string;
  password: string;
  setMasterField: (field: keyof MasterState | string, value: string) => void;
  resetMasterData: () => void;
}

export const useMasterStore = create<MasterState>((set) => ({
  lastName: "",
  firstName: "",
  middleName: "",
  passportNumber: "",
  jshshr: "",
  dateOfBirth: "",
  gender: "",
  nationality: "",
  email: "",
  phoneNumber: "",
  parentPhoneNumber: "",
  password: "",
  setMasterField: (field, value) =>
    set((state) => ({ ...state, [field]: value })),
  resetMasterData: () =>
    set({
      lastName: "",
      firstName: "",
      middleName: "",
      passportNumber: "",
      jshshr: "",
      dateOfBirth: "",
      gender: "",
      nationality: "",
      email: "",
      phoneNumber: "",
      parentPhoneNumber: "",
      password: "",
    }),
}));
