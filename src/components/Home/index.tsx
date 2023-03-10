import React from "react";

import Contacts from "components/Contacts";
import Intro from "components/Intro";
import Portfolio from "components/Portfolio";
import Works from "components/Works";
import { StyledHomePageWrapper } from "./styles";

export default function HomePage() {
  return (
    <StyledHomePageWrapper>
      <Intro />
      <Portfolio />
      <Works />
      <Contacts />
    </StyledHomePageWrapper>
  );
}
