export interface IAddress {
	country: string;
	region: string;
	address: string;
	studentId: number;
}

export interface IAddressResponse extends IAddress {
	id: number;
}
