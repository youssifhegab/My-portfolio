import styled from "styled-components";

import { mainColor } from "common/styles";

export const StyledTopBarWrapper = styled.div<{
  isActive?: boolean;
}>`
  width: 100%;
  height: 70px;
  position: fixed;
  top: 0;
  z-index: 3;
  ${({ isActive }) => `
  color: ${isActive ? "white" : mainColor};
  background-color: ${isActive ? mainColor : "white"};
  `}
  transition: all 1s ease;
`;

export const StyledBarWrapper = styled.div`
  padding: 10px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledLogoWrapper = styled.a`
  font-size: 40px;
  font-weight: 700;
  text-decoration: none;
  color: inherit;
  margin-right: 40px;
`;

export const StyledLeftPartWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledRightPartWrapper = styled.div``;

export const StyledInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;
  gap: 12px;
`;

export const StyledSpanText = styled.span`
  font-size: 15px;
  font-weight: 600;
`;
