import { IStudentReponse, studentApi } from "../../../shared";

interface FindStudentsProps {
  setData: (res: IStudentReponse[]) => void;
}

export async function findStudents({ setData }: FindStudentsProps) {
  try {
    const result: any = await studentApi.getAllStudents();
    if (result && result.data) {
      setData(result.data as IStudentReponse[]);
    } else {
      console.warn("Неожиданный формат ответа:", result);
    }
  } catch (error) {
    console.error("Ошибка при загрузке студентов:", error);
  }
}
