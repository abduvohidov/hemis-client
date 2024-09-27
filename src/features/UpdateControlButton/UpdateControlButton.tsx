import React from "react";

interface IUpdateControlButton {
  onClick?: () => void;
  className?: string;
  toggleModal?: string;
  targetModal?: string;
}

export const UpdateControlButton: React.FC<IUpdateControlButton> = (props) => {
  const { onClick, className, toggleModal, targetModal } = props;
  return (
    <button
      data-bs-toggle={toggleModal}
      data-bs-target={targetModal}
      className={`btn btn-light py-0 px-1 ${className}`}
      onClick={onClick}
    >
      update
    </button>
  );
};
