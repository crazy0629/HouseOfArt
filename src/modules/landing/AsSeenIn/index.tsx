import React from "react";
import {
  AsSeenInSectionContainer,
  AsSeenInSectionWrapper,
  ImageList,
} from "./style";

export const AsSeenInSection: React.FC = () => {
  return (
    <AsSeenInSectionWrapper>
      <AsSeenInSectionContainer>
        <h1>AS SEEN IN</h1>
        <ImageList>
          <img className="vogue" src="images/landing/vogue.png" alt="" />
          <img
            className="interiors"
            src="images/landing/interiors.jpeg"
            alt=""
          />
          <img className="house" src="images/landing/house&garden.png" alt="" />
        </ImageList>
      </AsSeenInSectionContainer>
    </AsSeenInSectionWrapper>
  );
};
