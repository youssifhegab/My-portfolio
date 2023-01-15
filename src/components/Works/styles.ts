import styled from "styled-components";

export const StyledWorksPageWrapper = styled.div`
  background-color: crimson;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
export const StyledSliderWrapper = styled.div<{ currentSlider: number }>`
  height: 350px;
  display: flex;
  position: absolute;
  ${({ currentSlider }) => `
  left: ${currentSlider}px;
  transform: translateX(-${currentSlider * 100}vw);
  `}
  transition: all 1s ease-out;
`;
export const StyledContainerWrapper = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const StyledItemWrapper = styled.div`
  width: 700px;
  height: 100%;
  background-color: white;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledLeftWrapper = styled.div`
  flex: 4;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  > div {
    width: 90%;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    > div {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: rgb(249, 179, 155);
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 25px;
        height: 25px;
      }
    }
    > h2 {
      font-size: 20px;
    }
    > p {
      font-size: 13px;
    }
    > span {
      font-size: 12px;
      font-weight: 600;
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;
export const StyledRightWrapper = styled.div`
  flex: 8;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  left: -20px;
  > img {
    width: 400px;
    transform: rotate(-10deg);
  }
`;

export const StyledLeftArrowWrapper = styled.div`
  position: absolute;
  cursor: pointer;
  left: 100px;
`;
export const StyledRightArrowWrapper = styled.div`
  position: absolute;
  cursor: pointer;
  right: 100px;
`;
