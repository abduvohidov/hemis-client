import { IStudentReponse, studentApi } from "../../../shared";

interface FindStudentsProps {
  setData: (res: IStudentReponse[]) => void;
}

export async function findStudents({ setData }: FindStudentsProps) {
  try {
    const result: any = await studentApi.getAllStudents();
    setData(result.data);
  } catch (error) {
    console.error("Error fetching students:", error);
  }
}
