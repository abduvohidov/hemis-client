export interface IAddress {
	country: string;
	region: string;
	address: string;
	masterId: number;
}

export interface IAddressResponse extends IAddress {
	id: number;
}
