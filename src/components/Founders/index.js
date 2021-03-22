import React from "react";
import fp1 from "../../images/svg1.svg";
import {
  FoundersContainer,
  FoundersWrapper,
  FoundersCard,
  FoundersH1,
  FoundersH2,
  FoundersIcon,
  FoundersP,
} from "./FoundersElements";

const Founders = () => {
  return (
    <FoundersContainer id="founders">
      <FoundersH1>Our Founders</FoundersH1>
      <FoundersWrapper>
        <FoundersCard>
          <FoundersIcon src={fp1} />
          <FoundersH2>Mr.John Hon</FoundersH2>
          <FoundersP>President</FoundersP>
        </FoundersCard>
        <FoundersCard>
          <FoundersIcon src={fp1} />
          <FoundersH2>Mr.John Hon</FoundersH2>
          <FoundersP>President</FoundersP>
        </FoundersCard>
        <FoundersCard>
          <FoundersIcon src={fp1} />
          <FoundersH2>Mr.John Hon</FoundersH2>
          <FoundersP>President</FoundersP>
        </FoundersCard>
      </FoundersWrapper>
    </FoundersContainer>
  );
};

export default Founders;
