import styled from "styled-components";

export const StyledHomePageWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
  position: relative;
  top: 70px;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
  scrollbar-width: none;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
  > * {
    width: 100vw;
    height: calc(100vh - 70px);
    scroll-snap-align: start;
  }
`;
