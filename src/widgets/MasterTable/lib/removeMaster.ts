import { MasterApi } from "../../../shared";

export async function removeMaster(id: number): Promise<void> {
  await MasterApi.deleteMaster(id);
}
