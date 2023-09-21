import {ReactElement, ReactNode} from "react";
import { Modal as BaseModal, Button } from 'react-bootstrap';
interface IModalProps {
  isOpen: boolean;
  title: ReactNode;
  onClose: () => void;
  children?: ReactNode;
}
const Modal = ({ isOpen, title, onClose, children }: IModalProps): ReactElement => {
  return (
    <BaseModal show={isOpen} onHide={onClose}>
      <BaseModal.Header closeButton>
        <BaseModal.Title>{title}</BaseModal.Title>
      </BaseModal.Header>
      <BaseModal.Body>
        {children}
      </BaseModal.Body>
      <BaseModal.Footer>
        <Button variant="light" onClick={onClose}>
          Close
        </Button>
      </BaseModal.Footer>
    </BaseModal>
  );
}

export default Modal;
