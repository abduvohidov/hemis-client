import React from "react";
import { Button } from "../../Button";
import { ModalProps } from "../type";

export const Modal: React.FC<ModalProps> = (props) => {
  const { title, children, modalId, onSave, className } = props;
  return (
    <div
      className={`modal fade ${className}`}
      id={modalId}
      aria-labelledby="exampleMoudalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleMasterModalLabel">
              {title}
            </h1>
          </div>

            <div className="modal-body">
                {children}
            </div>

          <div className="modal-footer">
            <Button color="light" toggleMasterModal="modal">
              Yopish
            </Button>
            <Button color="primary" toggleMasterModal="modal" onClick={onSave}>
              Saqlash
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
