export interface IStudent {
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
	password: string;
	addresses?: any[];
	education?: any[];
}
export interface IStudentReponse extends IStudent {
	id: number;
}
export interface IStudentDeletedResponse extends IStudent {
	message: string;
}
