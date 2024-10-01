export interface LoginRequest {
	email: string;
	password: string;
}

export interface LoginResponse {
	redirectTo: string;
	jwt: string;
}
