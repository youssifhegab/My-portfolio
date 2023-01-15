import React, { useState } from "react";
import { StyledItemListWrapper, StyledListWrapper } from "./styles";

const PortfolioList: React.FC<{
  list: {
    id: string;
    text: string;
  };
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<string>>;
}> = ({ list, active, setActive }) => {
  return (
    <StyledItemListWrapper isActive={active} onClick={() => setActive(list.id)}>
      {list.text}
    </StyledItemListWrapper>
  );
};

export default PortfolioList;
