import {ReactElement, useCallback} from "react";
import styles from './styles.module.scss';
import {Button} from "react-bootstrap";
import {useModalProviderContext} from "^components/ModalProvider/context.ts";
import ModalName from "^enums/ModalName.ts";

const SharedModalFooter = (): ReactElement => {
  const { openModal, closeModal } = useModalProviderContext();

  const handleOpenAllContactsModal = useCallback(
    (): void => openModal(ModalName.AllContacts),
    [openModal],
  );

  const handleOpenUSContactsModal = useCallback(
    (): void => openModal(ModalName.USContacts),
    [openModal],
  );

  return (
    <div className={styles.wrapper}>
      <Button onClick={handleOpenAllContactsModal}>All contacts</Button>

      <Button variant="secondary" onClick={handleOpenUSContactsModal}>US contacts</Button>

      <Button variant="light" onClick={closeModal}>Close</Button>
    </div>
  )
}

export default SharedModalFooter;
