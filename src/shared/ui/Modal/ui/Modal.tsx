import React from "react";
import { Button } from "../../Button";
import { ModalProps } from "../type";

export const Modal: React.FC<ModalProps> = (props) => {
  const { title, children, modalId, onSave, className } = props;

  return (
    <div
      className={`modal fade ${className ? className : ""}`}
      id={modalId}
      tabIndex={-1}
      aria-hidden="false"
      data-bs-keyboard="false"
      data-bs-backdrop="static"
      aria-labelledby="staticBackdropLabel"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleMasterModalLabel">
              {title}
            </h1>
          </div>
          <form
            className="row"
            onSubmit={(e) => {
              e.preventDefault();
              if (onSave) onSave();
            }}
          >
            <div className="modal-body">{children}</div>

            <div className="modal-footer">
              <Button
                color="light"
                type="button"
                closeModal="modal"
              >
                Yopish
              </Button>
              <Button color="primary" type="submit">
                Saqlash
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
