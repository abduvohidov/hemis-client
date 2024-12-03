import axios from "axios";

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

export const handleUpload = async (firstArticle, secondArticle, article , updateArticle) => {
  if (!firstArticle && !secondArticle) {
    alert("Пожалуйста, выберите хотя бы один файл для загрузки.");
    return;
  }

  const formData = new FormData();
  if (firstArticle) {
    formData.append("firstArticle", firstArticle); // Поле для первого файла
  }
  if (secondArticle) {
    formData.append("secondArticle", secondArticle); // Поле для второго файла
  }

  try {
    const url = `http://localhost:9000/articles/file-upload/${article?.id}`;
    const response = await axios.post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    updateArticle(response.data.message);
    window.location.reload();
    alert("Файлы успешно загружены!");
  } catch (error) {
    console.error("Ошибка при загрузке файлов:", error);
    alert("Ошибка при загрузке файлов.");
  }
};