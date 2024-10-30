import { IMasterReponse } from "../Master/Master.types";
import { IUserReponse } from "../user/user.types";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  message: {
    jwt: string;
    redirectTo: string;
    result: {
      id: number;
      name: string;
      lastName: string;
      email: string;
      password: string;
      role: string;
    };
  };
}
