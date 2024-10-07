import { studentApi } from "../../../shared";

export async function removeStudent(id: number): Promise<void> {
  try {
    await studentApi.deleteStudent(id);
    console.log(await studentApi.deleteStudent(id))
  } catch (error) {
    throw error;
  }
}
