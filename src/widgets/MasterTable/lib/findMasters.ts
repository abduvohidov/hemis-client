import { IMasterReponse, masterApi } from "../../../shared";

interface FindMastersProps {
  setData: (res: IMasterReponse[]) => void;
}

export async function findMasters({ setData }: FindMastersProps) {
  try {
    const result: any = await masterApi.getAllMasters();
    if (result && result.data) {
      setData(result.data as IMasterReponse[]);
    }
  } catch (error) {
    console.error("Ошибка при загрузке студентов:", error);
  }
}
