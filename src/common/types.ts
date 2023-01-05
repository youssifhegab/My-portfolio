import { Dispatch, SetStateAction } from "react";

export type menuOpenContextType = {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
};
