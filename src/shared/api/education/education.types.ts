export interface IEducation {
  id?: number;
  masterId: number;
  bachelorId?: number;
  currentSpecialization: string;
  facultyId?: number;
  course: string;
  paymentType: string;
  entryYear: string;
  educationForm: string;
  languageCertificate: string;
  semester: string;
  scientificSupervisor: string;
  scientificAdvisor: string;
  internshipSupervisor: string;
  internalReviewer: string;
  externamReviewer: string;
  thesisTopic: string;
  articlesId?: number;
  academicLeave: string;
  bachelor?: any[];
  articles?: any[];
  faculty?: any[];
}

export interface IEdcationResponse {
  success: boolean;
  message: {
    data: IEducation;
    messsage: string;
    status: boolean;
  };
}
