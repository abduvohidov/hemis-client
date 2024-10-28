import React, { FC } from "react";
import { Button } from "../../shared";
import {
  Button_Modal_Create_Contents,
  Button_Modal_Update_Contents,
} from "../../shared/consts/buttonModalContents";

export interface IButtonModal {
  type: "create" | "update";
}

export const ButtonModal: FC<IButtonModal> = (props) => {
  const { type } = props;
  const content =
    type === "create"
      ? Button_Modal_Create_Contents
      : Button_Modal_Update_Contents;
  const btns = content.map((obj, index) => (
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
      id={type==="create"? "triggerCreateButtons" : "triggerUpdateButtons"}
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleButtonsModalLabel">
              {type === "create" ? "Yaratish" : "O'zgartirish"}
            </h1>
          </div>
          <div className="modal-body d-flex flex-wrap gap-4 justify-content-center">
            {btns}
          </div>
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
