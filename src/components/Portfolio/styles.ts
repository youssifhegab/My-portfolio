import { mainColor } from "common/styles";
import styled from "styled-components";

export const StyledPortfolioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledHeaderWrapper = styled.h1`
  font-size: 50px;
`;

export const StyledListWrapper = styled.ul`
  display: flex;
  margin: 10px;
  padding: 0;
  list-style: none;
`;

export const StyledItemListWrapper = styled.li<{ isActive: boolean }>`
  font-size: 12px;
  margin-right: 50px;
  padding: 7px;
  cursor: pointer;
  border-radius: 999px;
  transition: all 0.5s ease;
  ${({ isActive }) =>
    isActive &&
    `
    background-color: ${mainColor};
    color: white;
  `}
  &:hover {
    background-color: ${mainColor}80;
    color: white;
  }
`;

export const StyledContainerWrapper = styled.div`
  width: 70%;
  display: flex;
  align-items; center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const StyledCardWrapper = styled.div`
  width: 220px;
  height: 150px;
  border-radius: 20px;
  border: 1px solid rgb(240, 239, 239);
  margin: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  position: relative;
  transition: all 0.5s ease;
  cursor: pointer;
  text-align: center;

  h3 {
    position: absolute;
    font-size: 20px;
    padding: 16px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
    border-radius: 20px;
  }
  &:hover {
    background-color: ${mainColor};
    img {
      opacity: 0.2;
      z-index: 0;
    }
  }
`;
