import React from "react";
import {
  ArtChooseSizeContainer,
  ArtChooseSizeWrapper,
  ArtSizeHeader,
  ArtSizeItemList,
  SizeGuide,
} from "./style";
import { ArtSizeItem } from "./ArtSizeItem";

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
        <ArtSizeItemList>
          <ArtSizeItem size="SMALL" inch={16} price="$159" />
          <ArtSizeItem size="MEDIUM" inch={20} price="$189" />
          <ArtSizeItem size="LARGE" inch={24} price="$239" />
          <ArtSizeItem size="GIANT" inch={28} price="$279" />
          <ArtSizeItem size="EXHIBITION" inch={36} price="$599" />
          <ArtSizeItem size="EXHIBITION" inch={40} price="$749" />
        </ArtSizeItemList>
      </ArtChooseSizeContainer>
    </ArtChooseSizeWrapper>
  );
};
