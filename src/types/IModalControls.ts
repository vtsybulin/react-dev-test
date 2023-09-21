import ModalName from "^enums/ModalName.ts";

export default interface IModalControls {
  activeModal: ModalName | null;
  openModal: (modalName: ModalName) => void;
  closeModal: () => void;
}
