import styled from "styled-components";
import { mainColor } from "common/styles";

export const StyledHamBurgerWrapper = styled.div`
  width: 32px;
  height: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
`;

const StyledSpan = styled.span`
  width: 100%;
  height: 3px;
  background-color: ${mainColor};
  transform-origin: left;
  transition: all 2s ease;
`;

export const StyledSpan1 = styled(StyledSpan)<{ isActive?: boolean }>`
  ${({ isActive }) =>
    isActive &&
    `
        background-color: white;
        transform: rotate(45deg)
    `}
`;
export const StyledSpan2 = styled(StyledSpan)<{ isActive?: boolean }>`
  ${({ isActive }) =>
    isActive &&
    `
        opacity: 0;
    `}
`;
export const StyledSpan3 = styled(StyledSpan)<{ isActive?: boolean }>`
  ${({ isActive }) =>
    isActive &&
    `
        background-color: white;
        transform: rotate(-45deg);
    `}
`;
