import React, { FC } from "react";
import { Button } from "../../shared";
import { Modal } from "../../shared/ui/Modal";
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
    <Modal
      modalId={
        type === "create" ? "triggerCreateButtons" : "triggerUpdateButtons"
      }
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
      title={type === "create" ? "Yaratish" : "O'zgartirish"}
    >
      <div className="modal-body d-flex flex-wrap gap-4 justify-content-center">
        {btns}
      </div>
    </Modal>
  );
};
