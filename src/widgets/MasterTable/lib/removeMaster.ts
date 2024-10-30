import { masterApi } from "../../../shared";

export async function removeMaster(id: number): Promise<void> {
  await masterApi.deleteMaster(id);
}
