export interface IAddress {
	country: string;
	region: string;
	address: string;
	MasterId: number;
}

export interface IAddressResponse extends IAddress {
	id: number;
}
