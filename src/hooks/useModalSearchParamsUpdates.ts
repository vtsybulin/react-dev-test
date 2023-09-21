import {useCallback, useMemo} from "react";
import {useSearchParams} from "react-router-dom";
import ModalName from "^enums/ModalName.ts";
import URLParam from "^enums/URLParam.ts";

type TUseModalSearchParamsUpdates = [(modalName: ModalName) => void, () => void];

const useModalSearchParamsUpdates = (): TUseModalSearchParamsUpdates => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleOpenModal = useCallback(
    (name: ModalName): void => {
      setSearchParams({[URLParam.ModalName]: name})
    },
    [setSearchParams],
  );

  const handleCloseModal = useCallback(
    (): void => {
      if (searchParams.has(URLParam.ModalName)) {
        searchParams.delete(URLParam.ModalName);
        setSearchParams(searchParams);
      }
    },
    [searchParams, setSearchParams],
  );

  return useMemo(
    (): TUseModalSearchParamsUpdates => ([handleOpenModal, handleCloseModal]),
    [handleCloseModal, handleOpenModal],
  );
}

export default useModalSearchParamsUpdates;


