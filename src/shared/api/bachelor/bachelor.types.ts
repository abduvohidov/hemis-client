export interface IBachelor {
	previousUniversity: string;
	graduationYear: string;
	diplomaNumber: string;
	previousSpecialization: string;
	education?: any[];
}

export interface IBachelorResponse extends IBachelor {
	id: number;
}
