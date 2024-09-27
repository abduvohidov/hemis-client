import React from "react";

interface IRemoveControlButton {
  onClick?: () => void;
  className?: string;
}

export const RemoveControlButton: React.FC<IRemoveControlButton> = (props) => {
  const { onClick, className } = props;
  return (
    <button
      className={`btn btn-light py-0 px-1 ${className}`}
      onClick={onClick}
    >
      remove
    </button>
  );
};
