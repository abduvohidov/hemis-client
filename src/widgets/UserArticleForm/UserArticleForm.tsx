import React, { useState } from "react";
import { IArticle } from "../../shared";
import { FileUploadContent } from "./fileUploadConten";
import { useLoginStore } from "../FormAuthorization/model/loginModel";

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

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "400px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <FileUploadContent
        article={article}
        firstArticle={firstArticle}
        secondArticle={secondArticle}
        updateArticle={updateArticle}
        setFirstArticle={setFirstArticle}
        setSecondArticle={setSecondArticle}
        handleFileChange={handleFileChange}
      />
    </div>
  );
};
