import { baseApi, IMasterReponse } from "../../../shared";

export async function generateXlsxFile(data) {
  const dataWithoutAvatarUrl = data.map(({ avatarUrl, ...student }) => student);
  const response = await baseApi.post("/Masters/download/sheets", dataWithoutAvatarUrl);
  console.log(response.data);
  
  return response.data.filename
}

// await window.location.href = "http://localhost:9000/Masters/download/sheets";
