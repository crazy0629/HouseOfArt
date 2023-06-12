import React from "react";
import {
  ArtChooseSizeContainer,
  ArtChooseSizeWrapper,
  ArtSizeHeader,
  SizeGuide,
} from "./style";

export const ArtChooseSize: React.FC = () => {
  return (
    <ArtChooseSizeWrapper>
      <ArtChooseSizeContainer>
        <ArtSizeHeader>
          <h1>Choose Your Size</h1>
          <SizeGuide>
            <img src="/images/art_abstract/artsizeguide.png" alt="" />
            <h2>Size Guide</h2>
          </SizeGuide>
        </ArtSizeHeader>
      </ArtChooseSizeContainer>
    </ArtChooseSizeWrapper>
  );
};
