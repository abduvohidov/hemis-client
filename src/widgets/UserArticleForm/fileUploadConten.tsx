import React from "react";
import { Button } from "../../shared";
import { handleUpload } from "./manipulateFiles";

export const FileUploadContent = ({
  article,
  setFirstArticle,
  setSecondArticle,
  handleFileChange,
  firstArticle,
  secondArticle,
  updateArticle,
}) => {
  function renderFirstArticle() {
    if (article.firstArticleFilename) {
      return (
        <div className="d-flex flex-column gap-2">
          <label htmlFor="firstArticle">
            <strong>Birinchi maqola : </strong> {article.firstArticleFilename}
          </label>
          <input
            type="file"
            id="firstArticle"
            className="form-control"
            onChange={(e) => handleFileChange(e, setFirstArticle)}
          />
        </div>
      );
    } else {
      <div className="d-flex flex-column gap-2">
        <label htmlFor="firstArticle">
          <strong>Birinchi maqolani yuklang</strong>
        </label>
        <input
          type="file"
          id="firstArticle"
          className="form-control"
          onChange={(e) => handleFileChange(e, setFirstArticle)}
        />
      </div>;
    }
  }
  function renderSecondArticle() {
    if (article.firstArticleFilename) {
      return (
        <div className="d-flex flex-column gap-2">
          <label htmlFor="secondArticle">
            <strong>Ikkinchi maqola : </strong> {article.secondArticleFilename}
          </label>
          <input
            type="file"
            id="secondArticle"
            className="form-control"
            onChange={(e) => handleFileChange(e, setSecondArticle)}
          />
        </div>
      );
    } else {
      <div className="d-flex flex-column gap-2">
        <label htmlFor="secondArticle">
          <strong>Ikkinchi maqolani yuklang</strong>
        </label>
        <input
          type="file"
          id="secondArticle"
          className="form-control"
          onChange={(e) => handleFileChange(e, setSecondArticle)}
        />
      </div>;
    }
  }
  if (article === null) {
    return <h3>Avval OTM va Maqola qo'shishingiz kerak</h3>;
  } else {
    return (
      <div className="d-flex flex-column gap-4">
        {renderFirstArticle()} {renderSecondArticle()}
        <Button
          children="Yuklash"
          onClick={() =>
            handleUpload(firstArticle, secondArticle, article, updateArticle)
          }
        />
      </div>
    );
  }
};
