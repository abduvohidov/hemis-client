import React, { useState, useEffect } from "react";
import { useModalStore } from "../model/modalStore";
import { updateInputType } from "../../ModalFormLayout/lib/updateInputType";
import { mastersModalContent } from "../../../shared/consts/modalContents/mastersModalContent";

export interface ModalLayoutUpdateProps {
  content: any;
  modalContent: any;
}

export const ModalUpdateLayout: React.FC<ModalLayoutUpdateProps> = ({
  content,
  modalContent,
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

  function handleInputChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setLocalContent((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setInputValue(name, value); // Update in the store as well
  }
  const filteredModalContent = mastersModalContent.filter(
    (item) => !excluded.includes(item?.name)
  );
  function renderFormInput() {
    return filteredModalContent.map((item) => {
      const currentValue = localContent[item.name] || item.value;

      return (
        <div key={item.name} className={`col-${item.col}`}>
          {updateInputType(
            { ...item, value: currentValue }, // Set current value
            item.name,
            handleInputChange
          )}
        </div>
      );
    });
  }

  return (
    <div className="row">
      {localContent && Object.keys(localContent).length > 0 ? (
        renderFormInput()
      ) : (
        <h4>Malumotlar qo'shilmagan</h4>
      )}
    </div>
  );
};
