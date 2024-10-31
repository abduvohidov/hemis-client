import { IMaster } from "../Master/Master.types";

export interface IAddress {
  id?: number;
  country: string;
  region: string;
  address: string;
  masterId: number;
  master?: IMaster;
}

export interface IAddressResponse extends IAddress {
  success: boolean;
  message: {
    data: IAddress;
    messsage: string;
    status: boolean;
  };
}
