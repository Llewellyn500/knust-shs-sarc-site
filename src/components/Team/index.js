import React from "react";
import fp1 from "../../images/svg1.svg";
import {
  TeamContainer,
  TeamWrapper,
  TeamCard,
  TeamH1,
  TeamH2,
  TeamIcon,
  TeamP,
} from "./TeamElements";

const Team = () => {
  return (
    <TeamContainer id="team">
      <TeamH1>Our Team</TeamH1>
      <TeamWrapper>
        <TeamCard>
          <TeamIcon src={fp1} />
          <TeamH2>Mr.John Hon</TeamH2>
          <TeamP>President</TeamP>
        </TeamCard>
        <TeamCard>
          <TeamIcon src={fp1} />
          <TeamH2>Mr.John Hon</TeamH2>
          <TeamP>President</TeamP>
        </TeamCard>
        <TeamCard>
          <TeamIcon src={fp1} />
          <TeamH2>Mr.John Hon</TeamH2>
          <TeamP>President</TeamP>
        </TeamCard>
      </TeamWrapper>
    </TeamContainer>
  );
};

export default Team;
