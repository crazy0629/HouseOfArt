import React from "react";
import {
  ArtShowDesc,
  ArtShowSectionContainer,
  ArtShowSectionWrapper,
} from "./style";
import { ArtItem } from "../../../components/ArtItemList/ArtItem";
import { ArtItemListArray } from "./data";

export const ArtShowSection: React.FC = () => {
  return (
    <ArtShowSectionWrapper>
      <ArtShowSectionContainer>
        {ArtItemListArray.map((item, key) => {
          return (
            <ArtItem
              key={key}
              ArtImgUrl={item.ArtImgUrl}
              ArtDesc={item.ArtDesc}
              ArtPrice={item.ArtPrice}
              ArtSize={item.ArtSize}
            />
          );
        })}
      </ArtShowSectionContainer>
      <ArtShowDesc>
        list loads automatically when scrolling down and goes on until there’s
        nothing more to show
      </ArtShowDesc>
    </ArtShowSectionWrapper>
  );
};
