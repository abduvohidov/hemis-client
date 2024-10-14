export interface IEducation {
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
}

export interface IEdcationResponse extends IEducation {
  id: number;
  bachelor?: any[];
  articles?: any[];
  faculty?: any[];
}
