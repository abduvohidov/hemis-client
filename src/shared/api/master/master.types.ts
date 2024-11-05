export interface IMaster {
  id?: number;
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
  avatarUrl: string;
  password: string;
  education?: any[];
}
export interface IMasterReponse extends IMaster {
  success: boolean;
  message:
    | string
    | {
        message: string;
        data: IMaster;
      };
}
export interface IMasterDeletedResponse extends IMaster {
  message: string;
}
