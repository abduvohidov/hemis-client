import React from "react";
import { Button } from "../../shared";
import { Modal } from "../../shared/ui/Modal";
import { Button_Modal_Update_Contents } from "../../shared/consts/buttonModalContents";

export const UpdateButtonModal = () => {
  const btns = Button_Modal_Update_Contents.map((obj, index) => (
    <Button
      key={index}
      color="primary"
      className="mx-2"
      closeModal="modal"
      children={obj.content}
      toggleMasterModal="modal"
      targetMasterModal={obj.targetMasterModal}
    />
  ));

  return (
    <Modal modalId="triggerUpdateButtons" title="O'zgartirish">
      <div className="modal-body d-flex flex-wrap gap-4 justify-content-center">
        {btns}
      </div>
    </Modal>
  );
};
