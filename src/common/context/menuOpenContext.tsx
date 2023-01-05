import { createContext, ReactNode, useContext, useState } from "react";
import { menuOpenContextType } from "common/types";

const MenuOpenContext: React.Context<menuOpenContextType> = createContext(
  {} as menuOpenContextType
);

export const useIsMenuOpenContext = () => useContext(MenuOpenContext);

const MenuOpenContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <MenuOpenContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
      {children}
    </MenuOpenContext.Provider>
  );
};

export default MenuOpenContextProvider;
