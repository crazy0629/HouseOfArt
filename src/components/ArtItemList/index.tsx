import React from "react";
import { ArtItemListContainer, ArtItemListWrapper } from "./style";
import { ArtItemListArray } from "./data";
import { ArtItem } from "./ArtItem";

export const ArtItemList: React.FC = () => {
  return (
    <ArtItemListWrapper>
      <ArtItemListContainer>
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
      </ArtItemListContainer>
    </ArtItemListWrapper>
  );
};
