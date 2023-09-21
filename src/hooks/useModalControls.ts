import ModalName from "^enums/ModalName.ts";
import {useCallback, useState} from "react";
import IModalControls from "^types/IModalControls.ts";
import useModalSearchParamsUpdates from "^hooks/useModalSearchParamsUpdates.ts";

const useModalControls = (): IModalControls => {
  const [activeModal, setActiveModal] = useState<ModalName | null>(null);
  const [onOpenModal, onCloseModal] = useModalSearchParamsUpdates();

  const openModal = useCallback(
    (modalName: ModalName): void => {
      setActiveModal(modalName);

      onOpenModal(modalName);
    },
    [onOpenModal],
  );

  const closeModal = useCallback(
    (): void => {
      setActiveModal(null)

      onCloseModal();
    },
    [onCloseModal],
  )

  return {
    activeModal,
    openModal,
    closeModal
  };
}

export default useModalControls;
