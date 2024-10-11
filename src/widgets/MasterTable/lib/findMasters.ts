import { IMasterReponse, MasterApi } from "../../../shared";

interface FindMastersProps {
  setData: (res: IMasterReponse[]) => void;
}

export async function findMasters({ setData }: FindMastersProps) {
  try {
    const result: any = await MasterApi.getAllMasters();
    if (result && result.data) {
      setData(result.data as IMasterReponse[]);
    } else {
      console.warn("Неожиданный формат ответа:", result);
    }
  } catch (error) {
    console.error("Ошибка при загрузке студентов:", error);
  }
}
