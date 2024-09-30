export interface LoginRequest {
	email: string;
	password: string;
}

export interface LoginResponse {
	message: {
		jwt: string;
		redirectTo: string;
	};
}
