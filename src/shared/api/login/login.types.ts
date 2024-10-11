import { IMasterReponse } from "../Master/Master.types";
import { IUserReponse } from "../user/user.types";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token(token: any): unknown;
  redirectTo: string;
  jwt: string;
  result: IMasterReponse | IUserReponse;
}
