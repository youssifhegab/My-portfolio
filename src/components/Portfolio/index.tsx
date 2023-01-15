import React, { useEffect, useState } from "react";
import PortfolioList from "./PortfolioList";
import {
  StyledCardWrapper,
  StyledContainerWrapper,
  StyledHeaderWrapper,
  StyledListWrapper,
  StyledPortfolioWrapper,
} from "./styles";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "common/data";

function Portfolio() {
  const [selected, setIsSelected] = useState("featured");
  const [data, setData] = useState<
    Array<{ id: number; title: string; img: string }>
  >([]);

  const list = [
    { id: "featured", text: "Featured" },
    { id: "web", text: "Web App" },
    { id: "mobile", text: "Mobile App" },
    { id: "design", text: "Design" },
    { id: "branding", text: "Branding" },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "branding":
        setData(contentPortfolio);
        break;
    }
  }, [selected]);

  return (
    <StyledPortfolioWrapper id='portfolio'>
      <StyledHeaderWrapper>Portfolio</StyledHeaderWrapper>
      <StyledListWrapper>
        {list.map((elem) => (
          <PortfolioList
            key={elem.id}
            list={elem}
            active={selected === elem.id}
            setActive={setIsSelected}
          />
        ))}
      </StyledListWrapper>
      <StyledContainerWrapper>
        {data.map((card) => (
          <StyledCardWrapper key={card.id}>
            <img src={card.img} alt='' />
            <h3>{card.title}</h3>
          </StyledCardWrapper>
        ))}
      </StyledContainerWrapper>
    </StyledPortfolioWrapper>
  );
}

export default Portfolio;
