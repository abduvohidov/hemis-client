import axios from "axios";
import React, { useState } from "react";
import { Button, IArticle } from "../../shared";

interface FileUploaderProps {
  article: IArticle | null;
}

export const UserArticleForm: React.FC<FileUploaderProps> = ({ article }) => {
  const [firstArticle, setFirstArticle] = useState<File | null>(null);
  const [secondArticle, setSecondArticle] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState<number>(0);

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setFile: React.Dispatch<React.SetStateAction<File | null>>
  ) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!firstArticle || !secondArticle) {
      alert("Пожалуйста, выберите оба файла для загрузки.");
      return;
    }

    const formData = new FormData();
    formData.append("firstArticle", firstArticle); // Поле для первого файла
    formData.append("secondArticle", secondArticle); // Поле для второго файла

    try {
      const url = `http://localhost:9000/articles/file-upload/${article.id}`;
      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent?.total
          );
          setUploadProgress(percentCompleted);
        },
      });

      alert("Файлы успешно загружены!");
      console.log("Ответ сервера:", response.data);
    } catch (error) {
      console.error("Ошибка при загрузке файлов:", error);
      alert("Ошибка при загрузке файлов.");
    }
  };
  console.log(article);

  function fileUploadContent() {
    if (article === null) {
      return <h3>Avval OTM va Maqola qo'shishingiz kerak</h3>;
    } else if (
      typeof article.firstArticleFilename === "string" &&
      typeof article.secondArticleFilename === "string"
    ) {
      return (
        <>
          <p>
            <strong>Birinchi maqola nomi: </strong>{" "}
            {article.firstArticleFilename}{" "}
          </p>
          <p>
            <strong>Birinchi maqola nomi: </strong>{" "}
            {article.secondArticleFilename}{" "}
          </p>
        </>
      );
    } else {
      return (
        <>
          <h3>Maqola yuklang</h3>
          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="firstArticle">Birinchi maqola</label>
            <input
              className="form-control"
              id="firstArticle"
              type="file"
              onChange={(e) => handleFileChange(e, setFirstArticle)}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="secondArticle">Ikkinchi maqola</label>
            <input
              id="secondArticle"
              type="file"
              className="form-control"
              onChange={(e) => handleFileChange(e, setSecondArticle)}
            />
          </div>
          <Button
            onClick={handleUpload}
            disabled={!firstArticle || !secondArticle}
          >
            Yuklash
          </Button>
        </>
      );
    }
  }

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "400px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      {fileUploadContent()}
    </div>
  );
};
