import React from "react";
import { Modal } from "../../../shared/ui/Modal";

interface MasterModalProps {}

export const MasterModal: React.FC<MasterModalProps> = () => {
  const handleSave = () => {};

  return (
    <Modal modalId={"exampleAddressModal"} title="Magistr" onSave={handleSave}>
      <div className="row">
        <h2>Hello</h2>
      </div>
    </Modal>
  );
};
