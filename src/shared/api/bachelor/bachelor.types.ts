export interface IBachelor {
  id?: number;
  previousUniversity: string;
  graduationYear: string;
  diplomaNumber: string;
  previousSpecialization: string;
  education?: any[];
}

export interface IBachelorResponse extends IBachelor {
  success: boolean;
  message:
    | string
    | {
        message: string;
        data: IBachelor;
      };
}

export interface IBachelorModalData extends Omit<IBachelor, "education"> {
  masterId: string | number;
}
