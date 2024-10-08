import { studentApi } from "../../../shared";

export async function removeStudent(id: number): Promise<void> {
  await studentApi.deleteStudent(id);
}
