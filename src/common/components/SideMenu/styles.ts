import { mainColor } from "common/styles";
import styled from "styled-components";

export const StyledSideMenuWrapper = styled.div<{ isActive: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 100vh;
  background-color: ${({ isActive }) => (isActive ? mainColor : "white")};
  position: fixed;
  top: 0;
  right: ${({ isActive }) => (isActive ? `0` : "-300px")};
  transition: all 1s ease;
  z-index: 2;
`;

export const StyledListWrapper = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 30px;
  font-weight: 300;
  color: white;
  width: 60%;

  > li {
    margin-bottom: 20px;
    &:hover {
      font-weight: 500;
    }
    > a {
      font-size: inherit;
      color: inherit;
      text-decoration: none;
    }
  }
`;
