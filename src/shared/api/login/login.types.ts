export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  redirectTo: string;
  message: {
    jwt: string;
  };
}
