export interface LoginRequest {
	email: string;
	password: string;
}

export interface LoginResponse {
	token(token: any): unknown;
	redirectTo: string;
	jwt: string;
}
