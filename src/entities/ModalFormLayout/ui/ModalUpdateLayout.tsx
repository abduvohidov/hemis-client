import React, { useState, useEffect } from "react";
import { useModalStore } from "../model/modalStore";

export interface ModalLayoutUpdateProps {
  content: any;
}

export const ModalUpdateLayout: React.FC<ModalLayoutUpdateProps> = ({
  content,
}) => {
  const [localContent, setLocalContent] = useState(content);
  const setInputValue = useModalStore((state) => state.setInputValue);

  // Update localContent whenever content prop changes
  useEffect(() => {
    setLocalContent(content);
  }, [content]);

  const excluded = [
    "id",
    "educationId",
    "education",
    "addresses",
    "addressId",
    "password",
    "articlesId",
    "articles",
    "bachelor",
    "bachelorId",
    "faculty",
    "facultyId",
    "masterId",
    "avatarUrl",
  ];

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setLocalContent((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setInputValue(name, value); // Update in the store as well
  }

  function renderFormInput() {
    return Object.entries(localContent || {})
      .filter(([key]) => !excluded.includes(key))
      .map(([key, value]) => (
        <input
          key={key}
          id={key}
          type="text"
          name={key}
          value={value as any || ""}
          className="form-control"
          onChange={handleInputChange}
        />
      ));
  }

  return (
    <div>
      {localContent && Object.keys(localContent).length > 0 ? (
        renderFormInput()
      ) : (
        <h4>Malumotlar qo'shilmagan</h4>
      )}
    </div>
  );
};
