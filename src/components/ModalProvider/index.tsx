import {ReactElement, ReactNode, useMemo} from "react";
import {IModalProviderContext, ModalProviderContext} from "./context.ts";
import useModalControls from "^hooks/useModalControls.ts";
import ModalName from "^enums/ModalName.ts";
import Modal from "^components/Modal";
import ContactsTable from "^components/ContactsTable";
import {BASE_REQUEST_PARAMS} from "^configs/api.ts";
import {US_COUNTRY_CODE} from "^configs/common.ts";
import SharedModalFooter from "^components/SharedModalFooter";

interface IModalProviderProps {
  children: ReactNode;
}

const ModalProvider = ({ children }: IModalProviderProps): ReactElement => {
  const modalControls = useModalControls();

  const contextValue = useMemo(
    (): IModalProviderContext => modalControls,
    [modalControls],
  );

  return (
    <ModalProviderContext.Provider value={contextValue}>
      {children}

      <Modal
        title="All contacts"
        isOpen={modalControls.activeModal === ModalName.AllContacts}
        onClose={modalControls.closeModal}
      >
        <ContactsTable requestParams={BASE_REQUEST_PARAMS} />

        <SharedModalFooter />
      </Modal>

      <Modal
        title="US contacts"
        isOpen={modalControls.activeModal === ModalName.USContacts}
        onClose={modalControls.closeModal}
      >
        <ContactsTable requestParams={{...BASE_REQUEST_PARAMS, countryId: US_COUNTRY_CODE}} />

        <SharedModalFooter />
      </Modal>
    </ModalProviderContext.Provider>
  )
}

export default ModalProvider;
