import { useIsMenuOpenContext } from "common/context/menuOpenContext";
import React from "react";

import {
  StyledHamBurgerWrapper,
  StyledSpan1,
  StyledSpan2,
  StyledSpan3,
} from "./styles";

function HamBurger() {
  const { isMenuOpen, setIsMenuOpen } = useIsMenuOpenContext();

  return (
    <StyledHamBurgerWrapper onClick={() => setIsMenuOpen(!isMenuOpen)}>
      <StyledSpan1 isActive={isMenuOpen}></StyledSpan1>
      <StyledSpan2 isActive={isMenuOpen}></StyledSpan2>
      <StyledSpan3 isActive={isMenuOpen}></StyledSpan3>
    </StyledHamBurgerWrapper>
  );
}

export default HamBurger;
