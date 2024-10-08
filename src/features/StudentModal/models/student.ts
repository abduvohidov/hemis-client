import { create } from "zustand";

interface StudentState {
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
  setStudentField: (field: keyof StudentState, value: string) => void;
  resetStudentData: () => void;
}

export const useStudentStore = create<StudentState>((set) => ({
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
  setStudentField: (field, value) =>
    set((state) => ({ ...state, [field]: value })),
  resetStudentData: () =>
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
