import React from "react";
import { HomeSectionContainer, HomeSectionWrapper, ShopNowBtn } from "./style";

export const HomeSection: React.FC = () => {
  return (
    <HomeSectionWrapper>
      <HomeSectionContainer>
        <h1>ART FOR EVERY WALL</h1>
        <ShopNowBtn>SHOP NOW</ShopNowBtn>
      </HomeSectionContainer>
    </HomeSectionWrapper>
  );
};
