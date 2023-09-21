import {ReactElement, useCallback, useMemo, useState} from "react";
import {Alert, Spinner, Table} from "react-bootstrap";
import classNames from 'classnames';
import IContact from "^types/IContact.ts";

import ContactRow from "./ContactRow";
import styles from './styles.module.scss';
import useToggle from "^hooks/useToggle.ts";
import Modal from "^components/Modal";
import arrayToMap from "^utils/arrayToMap.ts";
interface IContactsTableProps {
  contacts: IContact[];
  isLoading: boolean;
}

const ContactsTableLayout = ({ contacts, isLoading }: IContactsTableProps): ReactElement => {
  const [selectedContactId, setSelectedContactId] = useState<IContact['id'] | null>(null);
  const [isContactDetailsModalOpened, openContactDetailsModal, closeContactDetailsModal] = useToggle();

  const contactsMap = useMemo(
    (): Record<IContact['id'], IContact> => arrayToMap<IContact>(contacts, 'id'),
    [contacts],
  );
  const selectedContactDetails = useMemo(
    (): IContact | null => {
      if (!selectedContactId) {
        return null;
      }

      return contactsMap[selectedContactId]
    },
    [contactsMap, selectedContactId],
  );

  const handleOpenContactDetailsModal = useCallback(
    (id: IContact['id']): void => {
      setSelectedContactId(id);
      openContactDetailsModal();
    },
    [openContactDetailsModal],
  );

  if (isLoading) {
    return (
      <div className={classNames(styles.wrapper, styles.spinner)}>
        <Spinner animation="border" variant="warning">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    )
  }

  if(contacts.length === 0) {
    return (
      <div className={styles.wrapper}>
        <Alert variant="warning">
          No results
        </Alert>
      </div>
    )
  }

  return (
    <div className={styles.wrapper}>
      <Table striped bordered>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Country id</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            contacts.map((contact: IContact): ReactElement => (
              <ContactRow
                key={contact.id}
                contact={contact}
                onClick={handleOpenContactDetailsModal}
              />
            ))
          }
        </tbody>
      </Table>

      <Modal
        title={`Contact id: ${selectedContactId}`}
        isOpen={isContactDetailsModalOpened}
        onClose={closeContactDetailsModal}>
        Contact name - {selectedContactDetails?.first_name} {selectedContactDetails?.last_name}
      </Modal>
    </div>
  )
}

export default ContactsTableLayout;
