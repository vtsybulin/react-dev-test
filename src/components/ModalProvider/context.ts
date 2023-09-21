import {createContext, useContext} from "react";
import IModalControls from "^types/IModalControls.ts";

export interface IModalProviderContext extends IModalControls {}

export const ModalProviderContext = createContext<IModalProviderContext | null>(null);

export const useModalProviderContext = (): IModalProviderContext => {
  const context = useContext(ModalProviderContext);

  if (!context) {
    throw Error('ModalProviderContext missing')
  }

  return context;
}
