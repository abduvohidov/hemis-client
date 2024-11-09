import React from "react";
import { Button } from "../../shared";
import { Modal } from "../../shared/ui/Modal";
import { Button_Modal_Create_Contents } from "../../shared/consts/buttonModalContents";

export const CreateButtonModal = () => {
  const btns = Button_Modal_Create_Contents.map((obj, index) => (
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
    <Modal modalId="triggerCreateButtons" title="Yaratish">
      <div className="modal-body d-flex flex-wrap gap-4 justify-content-center">
        {btns}
      </div>
    </Modal>
  );
};
