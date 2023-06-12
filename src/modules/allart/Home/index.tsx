import React from "react";
import { ArtHomeSectionContainer, ArtHomeSectionWrapper } from "./style";

export const ArtHomeSection: React.FC = () => {
  return (
    <ArtHomeSectionWrapper>
      <ArtHomeSectionContainer>
        <h1>All art</h1>
        <h3>
          All art is printed on premium paper or gallery- like wrap for
          exceptional quality and color, framed or unframed.
        </h3>
      </ArtHomeSectionContainer>
    </ArtHomeSectionWrapper>
  );
};
