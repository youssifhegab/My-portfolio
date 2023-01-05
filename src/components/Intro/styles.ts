import styled, { keyframes } from "styled-components";
import { StyledPageWrapper } from "common/styles";

export const StyledIntroWrapper = styled(StyledPageWrapper)`
  display: flex;
`;

export const StyledLeftDivWrapper = styled.div`
  flex: 0.5;
  overflow: hidden;
`;

const arrowBlink = keyframes`
    100%{
        opacity: 1;
    }
    50%{
        opacity: 0;
    }
`;

export const StyledRightDivWrapper = styled.div`
  position: relative;
  flex: 0.5;
  > div {
    width: 100%;
    height: 100%;
    padding-left: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    > h1 {
      font-size: 60px;
      margin: 10px 0;
    }
    > h2 {
      font-size: 35px;
    }
    > h3 {
      font-size: 30px;
      > span {
        font-size: inherit;
        color: crimson;
      }
    }
  }
  > a {
    position: absolute;
    bottom: 10px;
    left: 40%;
    > svg {
      animation: ${arrowBlink} 2s infinite;
    }
  }
`;

export const StyledImageContainer = styled.div`
  width: 800px;
  height: 800px;
  background-color: crimson;
  border-radius: 50%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  float: right;
  position: relative;
`;
