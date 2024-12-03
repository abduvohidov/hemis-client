import axios from "axios";

export async function updateFile(
  targetedArticleName,
  targetedArticleFile,
  articleId,
  updateArticle
) {
  try {
    const formData = new FormData();
    formData.append(targetedArticleName, targetedArticleFile); // Поле для первого файла
    const url = `http://localhost:9000/articles/file-upload/${articleId}`;
    const response = await axios.post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    updateArticle(response.data.message);
    window.location.reload();
    alert("Maqola yangilandi ✅");
  } catch (error) {
    console.error("Ошибка при загрузке файлов:", error);
    alert("Ошибка при загрузке файлов.");
  }
}
export async function deleteFile(
  targetedArticleName,
  articleId,
  updateArticle
) {
  try {
    const url = `http://localhost:9000/articles/file-delete/${articleId}/${targetedArticleName}`;
    const response = await axios.delete(url, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    updateArticle(response.data.message);
    window.location.reload();
    alert("Maqola o'chirildi ✅");
  } catch (error) {
    console.error("Ошибка при загрузке файлов:", error);
    alert("Ошибка при загрузке файлов.");
  }
}
