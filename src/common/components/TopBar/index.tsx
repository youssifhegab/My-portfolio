import React from "react";
import { IcMail, IcPerson } from "common/icons";
import {
  StyledTopBarWrapper,
  StyledBarWrapper,
  StyledLogoWrapper,
  StyledLeftPartWrapper,
  StyledInfoWrapper,
  StyledSpanText,
  StyledRightPartWrapper,
} from "./styles";
import HamBurger from "../HamBurger";
import { useIsMenuOpenContext } from "common/context/menuOpenContext";

function TopBar() {
  const { isMenuOpen } = useIsMenuOpenContext();
  return (
    <StyledTopBarWrapper isActive={isMenuOpen}>
      <StyledBarWrapper>
        <StyledLeftPartWrapper>
          <StyledLogoWrapper href='#intro'>YH</StyledLogoWrapper>
          <StyledInfoWrapper>
            <IcPerson color={isMenuOpen ? "white" : undefined} />
            <StyledSpanText>+20 115 361 362 2</StyledSpanText>
          </StyledInfoWrapper>
          <StyledInfoWrapper>
            <IcMail color={isMenuOpen ? "white" : undefined} />
            <StyledSpanText>youssif.hegab123@gmail.com</StyledSpanText>
          </StyledInfoWrapper>
        </StyledLeftPartWrapper>
        <StyledRightPartWrapper>
          <HamBurger />
        </StyledRightPartWrapper>
      </StyledBarWrapper>
    </StyledTopBarWrapper>
  );
}

export default TopBar;
