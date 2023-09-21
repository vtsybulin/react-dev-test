import {useCallback} from "react";
import './App.css'
import {Button} from "react-bootstrap";
import {useModalProviderContext} from "^components/ModalProvider/context.ts";
import ModalName from "./enums/ModalName.ts";
import styles from './styles.module.scss';


function App() {
  const { openModal } = useModalProviderContext();

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
      <div className={styles.buttonsWrapper}>
        <Button
          variant="primary"
          onClick={handleOpenAllContactsModal}
        >
          All contacts
        </Button>

        <Button
          variant="secondary"
          onClick={handleOpenUSContactsModal}>
          US contacts
        </Button>
      </div>
    </div>
  )
}

export default App
