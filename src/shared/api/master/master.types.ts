import { IArticleReponse } from "../article/article.types";
import { IBachelorResponse } from "../bachelor/bachelor.types";
import { IFacultyReponse } from "../faculty/faculty.types";

export interface IMaster {
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
  [x: string]: any;
  id: number;
}
export interface IMasterDeletedResponse extends IMaster {
  message: string;
}
