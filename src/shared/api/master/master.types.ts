export interface IMaster {
  id?: number;
  lastName: string;
  firstName: string;
  middleName: string;
  passportNumber: string;
  jshshr: string;
  dateOfBirth: string | Date;
  gender: string;
  nationality: string;
  email: string;
  phoneNumber: string;
  parentPhoneNumber: string;
  avatarUrl: string;
  password: string;
  education?: any;
  addresses?: any;
}
export interface IMasterResponse {
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
