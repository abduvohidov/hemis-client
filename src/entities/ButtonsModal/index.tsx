import React from "react";
import { Button } from "../../shared";
import { Button_Modal_Contents } from "../../shared/consts";

export const ButtonModal = () => {
  const btns = Button_Modal_Contents.map((obj, index) => (
    <Button
      key={index}
      color="primary"
      className="mx-2"
      toggleMasterModal="modal"
      targetMasterModal={obj.targetMasterModal}
      children={obj.content}
    />
  ));

  return (
    <div
      className="modal fade"
      id="triggerCreateButtons"
      aria-labelledby="exampleMoudalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleButtonsModalLabel">
              Yaratish
            </h1>
          </div>
          <div className="modal-body d-flex flex-wrap gap-4 justify-content-center">{btns}</div>
          <div className="modal-footer">
            <Button color="light" toggleMasterModal="modal">
              Yopish
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
