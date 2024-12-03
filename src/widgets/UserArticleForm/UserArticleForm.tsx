import axios from "axios";
import React, { useState } from "react";
import { Button, IArticle } from "../../shared";
import { useLoginStore } from "../FormAuthorization/model/loginModel";
import { deleteFile, updateFile } from "./manipulateFiles";

interface FileUploaderProps {
  article: IArticle | null;
}

export const UserArticleForm: React.FC<FileUploaderProps> = ({ article }) => {
  const [firstArticle, setFirstArticle] = useState<File | null>(null);
  const [secondArticle, setSecondArticle] = useState<File | null>(null);
  const updateArticle = useLoginStore((state) => state.updateArticleInfo);
  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setFile: React.Dispatch<React.SetStateAction<File | null>>
  ) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
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

  function fileUploadContent() {
    if (article === null) {
      return <h3>Avval OTM va Maqola qo'shishingiz kerak</h3>;
    }

    return (
      <>
        {/* Section for the first article */}
        <div style={{ marginBottom: "15px" }}>
          {article.firstArticleFilename ? (
            <div>
              <p>
                <strong>Birinchi maqola nomi: </strong>{" "}
                {article.firstArticleFilename}
              </p>
              <Button
                children="Fileni o'chirish"
                onClick={() =>
                  deleteFile("first", article.id, updateArticle)
                }
              />
            </div>
          ) : (
            <>
              <h4>Birinchi maqolani yuklang</h4>
              <label htmlFor="firstArticle">Birinchi maqola</label>
              <input
                className="form-control"
                id="firstArticle"
                type="file"
                onChange={(e) => handleFileChange(e, setFirstArticle)}
              />
            </>
          )}
        </div>

        {/* Section for the second article */}
        <div style={{ marginBottom: "15px" }}>
          {article.secondArticleFilename ? (
            <div>
              <p>
                <strong>Ikkinchi maqola nomi: </strong>{" "}
                {article.secondArticleFilename}
              </p>
              <Button
                children="Fileni o'chirish"
                onClick={() =>
                  deleteFile("firstArticle", article.id, updateArticle)
                }
              />
            </div>
          ) : (
            <>
              <h4>Ikkinchi maqolani yuklang</h4>
              <label htmlFor="secondArticle">Ikkinchi maqola</label>
              <input
                id="secondArticle"
                type="file"
                className="form-control"
                onChange={(e) => handleFileChange(e, setSecondArticle)}
              />
            </>
          )}
        </div>

        {/* Show upload button only if at least one file is selected */}
        <Button
          onClick={handleUpload}
          disabled={!firstArticle && !secondArticle}
        >
          Yuklash
        </Button>
      </>
    );
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
