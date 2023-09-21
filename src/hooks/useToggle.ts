import { useMemo, useState } from 'react';

type TUseToggleResponse = [boolean, () => void, () => void];

const useToggle = (isDefaultToggled: boolean = false): TUseToggleResponse => {
  const [isToggled, setIsToggled] = useState<boolean>(isDefaultToggled);

  return useMemo(
    (): TUseToggleResponse => {
      const set = (): void => setIsToggled(true);
      const unset = (): void => setIsToggled(false);

      return [isToggled, set, unset];
    },
    [isToggled],
  );
};

export default useToggle;
