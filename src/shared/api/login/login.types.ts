import { IStudentReponse } from "../student/student.types";
import { IUserReponse } from "../user/user.types";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token(token: any): unknown;
  redirectTo: string;
  jwt: string;
  result: IStudentReponse | IUserReponse;
}
