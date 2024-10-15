import { baseApi } from "../../../shared";

export async function downloadXlsxFile(data) {
  const educations = data.map((item, indx) => {
    return item.education[0];
  });
  const bachelors = educations.map((item) => {
    return item.bachelor;
  });
  const addresses = data.map((item) => {
    return item.addresses[0];
  });
  const faculties = educations.map((item) => {
    return item.faculty;
  });
  const articles = educations.map((item) => {
    return item.article;
  });

  const responseData = {
    masters: data,
    educations,
    addresses,
    bachelors,
    faculties,
    articles,
  };
  await baseApi.post("/Masters/download/sheets", responseData);
}

// await window.location.href = "http://localhost:9000/Masters/download/sheets";
