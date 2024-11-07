export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  message:
    | string
    | {
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
