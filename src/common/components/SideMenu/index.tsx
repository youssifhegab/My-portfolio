import { useIsMenuOpenContext } from "common/context/menuOpenContext";
import React from "react";
import { StyledListWrapper, StyledSideMenuWrapper } from "./styles";

function SideMenu() {
  const { isMenuOpen, setIsMenuOpen } = useIsMenuOpenContext();
  return (
    <StyledSideMenuWrapper isActive={isMenuOpen}>
      <StyledListWrapper>
        <li onClick={() => setIsMenuOpen(false)}>
          <a href='#intro'>Home</a>
        </li>
        <li onClick={() => setIsMenuOpen(false)}>
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li onClick={() => setIsMenuOpen(false)}>
          <a href='#works'>Works</a>
        </li>
        <li onClick={() => setIsMenuOpen(false)}>
          <a href='#testimonials'>Testimonials</a>
        </li>
        <li onClick={() => setIsMenuOpen(false)}>
          <a href='#contact'>Contacts</a>
        </li>
      </StyledListWrapper>
    </StyledSideMenuWrapper>
  );
}

export default SideMenu;
