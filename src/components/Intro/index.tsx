import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { init } from "ityped";
import {
  StyledIntroWrapper,
  StyledLeftDivWrapper,
  StyledRightDivWrapper,
  StyledImageContainer,
} from "./styles";
import { IcDownArrow } from "common/icons";

function Intro() {
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current)
      init(textRef.current, {
        showCursor: false,
        strings: ["Developer", "Engineer", "Programmer"],
        backDelay: 1500,
        backSpeed: 60,
      });
  }, []);
  return (
    <StyledIntroWrapper id='intro'>
      <StyledLeftDivWrapper>
        <StyledImageContainer>
          <Image
            src='/zz.png'
            fill
            style={{ objectFit: "contain" }}
            alt='My picture'
          />
        </StyledImageContainer>
      </StyledLeftDivWrapper>
      <StyledRightDivWrapper>
        <div>
          <h2>Hi There, I&apos;m</h2>
          <h1>Youssif Hegab</h1>
          <h3>
            Front-end <span ref={textRef}> </span>
          </h3>
        </div>
        <a href='#portfolio'>
          <IcDownArrow />
        </a>
      </StyledRightDivWrapper>
    </StyledIntroWrapper>
  );
}

export default Intro;
