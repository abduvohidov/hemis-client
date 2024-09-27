import React from "react";
import "./List.css";
import { UpdateControlButton } from "../../../features/UpdateControlButton/UpdateControlButton";
import { RemoveControlButton } from "../../../features/RemoveControlButton/UpdateControlButton";

interface IList {
  children: string;
  onClickUpdate?: () => void;
  onClickRemove?: () => void;
  toggleModal?: string;
  targetModal?: string;
}

export const List: React.FC<IList> = (props) => {
  const { children, onClickRemove, onClickUpdate, toggleModal, targetModal } =
    props;

  return (
    <li
      className={
        "list-group-item d-flex align-items-center justify-content-between"
      }
    >
      <form action="">
        <div>
          <input type="checkbox" id={children} />
          <label htmlFor={children}>{children}</label>
        </div>
      </form>

      <div className="GroupButtons">
        <UpdateControlButton
          className={"me-2"}
          onClick={onClickUpdate}
          targetModal={targetModal}
          toggleModal={toggleModal}
        />
        <RemoveControlButton onClick={onClickRemove} />
      </div>
    </li>
  );
};
