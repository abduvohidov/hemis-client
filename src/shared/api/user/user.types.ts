export interface IUser {
	name: string;
	lastName: string;
	email: string;
	password: string;
	role: string;
}
export interface IUserReponse {
	message: {
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
