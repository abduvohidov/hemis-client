export interface IFaculty {
  id?: number;
  name: string;
  education: any[];
}
export interface IFacultyResponse {
  success: boolean | undefined;
  message: string;
  data: IFaculty | null;
}
