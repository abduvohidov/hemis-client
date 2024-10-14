import { IMaster } from "../../../shared";
import { Modal } from "../../../shared/ui/Modal";
import { mastersModalContent } from "../../../shared/consts";
import {
  ModalFormLayout,
  useModalStore,
} from "../../../entities/ModalFormLayout";

interface MasterModalProps {
  onSubmit: (MasterData: IMaster) => Promise<void>;
}

export const MasterModal: React.FC<MasterModalProps> = () => {
  const setInputValue = useModalStore((state) => state.setInputValue);
  const createMaster = useModalStore((state) => state.createMaster);
  const modalData = useModalStore((state) => state.modalData);

  const convertBase64 = (file) => {
    return new Promise<string>((resolve, reject) => {
      if(!file) {
        return "";
      }

      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve((fileReader as any).result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  async function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value, type } = e.target;
    if(type === "file") {
      const file = e.target.files[0];
      const base64 = await convertBase64(file);
      setInputValue(name, base64)
    } else {
      setInputValue(name, value);
    }
  }
  async function handleSave() {
    try {
      await createMaster(modalData as unknown as IMaster);
      alert("Masgistr qo'shilid")
    } catch (error) {
      console.error("Error submitting form", error);
    }
  }

  return (
    <Modal
      modalId={"masterModal"}
      title={"Magistr yaratish"}
      onSave={handleSave}
    >
      <ModalFormLayout
        handleChange={handleChange}
        content={mastersModalContent}
      />
    </Modal>
  );
};
