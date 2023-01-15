import { mainColor } from "common/styles";
import styled from "styled-components";

const StyledButton = styled.button`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  letter-spacing: 1.4px;
`;
const StyledInput = styled.input`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  letter-spacing: 1.4px;
`;
const StyledTextArea = styled.textarea`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  letter-spacing: 1.4px;
`;

export const StyledContactPageWrapper = styled.div`
  display: flex;
`;
export const StyledContainerWrapper = styled.div`
  flex: 0 1 700px;
  margin: auto;
  padding: 10px;
`;
export const StyledScreenWrapper = styled.div`
  position: relative;
  background: #3e3e3e;
  border-radius: 15px;
  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 20px;
    right: 20px;
    bottom: 0;
    border-radius: 15px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
    z-index: -1;
  }
`;
export const StyledScreenBodyWrapper = styled.div`
  display: flex;
  @media screen and (max-width: 600px) {
    padding: 40px;
  }
`;

export const StyledAppTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  color: ${mainColor};
  font-size: 26px;
  &:after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 25px;
    height: 4px;
    background: ${mainColor};
  }
`;

export const StyledAppContact = styled.div`
  margin-top: auto;
  font-size: 12px;
  color: #888;
`;

export const StyledScreenBodyItem = styled.div`
  flex: 1;
  padding: 50px 50px 50px 25px;
  @media screen and (max-width: 600px) {
    padding: 0;
  }
`;

export const StyledAppFormGroup = styled.div`
  margin-bottom: 15px;
  .message {
    margin-top: 40px;
  }
  .buttons {
    margin-bottom: 0;
    text-align: right;
  }
`;

export const StyledAppFormControl = styled(StyledInput)`
  width: 100%;
  padding: 10px 0;
  background: none;
  border: none;
  border-bottom: 1px solid #666;
  color: #ddd;
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s;
  &::placeholder {
    color: #666;
  }

  &:focus {
    border-bottom-color: #ddd;
  }
`;
export const StyledAppFormTextArea = styled(StyledTextArea)`
  line-height: 1.5rem;
  width: 100%;
  height: 8rem;
  background: none;
  border: none;
  appearance: none;
  background-color: transparent;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='24'><rect fill='rgb(102,102,102)' x='0' y='23' width='10' height='1'/></svg>");
  resize: none;
  color: #ddd;
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s;
  &:focus {
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='24'><rect fill='rgba(221,221,221)' x='0' y='23' width='10' height='1'/></svg>");
    outline: none;
  }
  &::placeholder {
    color: #666;
  }

  &:focus {
    border-bottom-color: #ddd;
  }
`;

export const StyledAppFormButton = styled(StyledButton)`
  background: none;
  border: none;
  color: ${mainColor};
  font-size: 14px;
  cursor: pointer;
  outline: none;
  &:hover {
    color: ${mainColor};
  }
`;

export const StyledContactList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const StyledListItem = styled.li`
  line-height: 3;
  color: #aaa;
  width: 100%;
  margin: 0;
  padding: 0;
`;

export const StyledContactText = styled.span`
  font: 300 13px "Lato", sans-serif;
  letter-spacing: 1.9px;
  margin-left: 16px;
  color: #bbb;
  a {
    color: #bbb;
    text-decoration: none;
    transition-duration: 0.2s;
    &:hover {
      color: #fff;
      text-decoration: none;
    }
  }
`;

export const StyledSocialMediaList = styled.ul`
  display: flex;
  position: relative;
  justify-content: center;
  font-size: 22px;
  text-align: center;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  gap: 20px;

  li {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    width: 60px;
    margin: 10px 3px;
    line-height: 60px;
    border-radius: 50%;
    color: #fff;
    background-color: rgb(27, 27, 27);
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    a {
      color: #fff;
    }
    > svg {
      fill: white;
    }
    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 60px;
      height: 60px;
      line-height: 60px;
      border-radius: 50%;
      opacity: 0;
      box-shadow: 0 0 0 1px #fff;
      transition: all 0.2s ease-in-out;
    }
    &:hover {
      background-color: #fff;
      > svg {
        fill: black;
      }
      &:after {
        opacity: 1;
        transform: scale(1.12);
        transition-timing-function: cubic-bezier(0.37, 0.74, 0.15, 1.65);
      }
      a {
        color: #000;
      }
    }
  }
`;
