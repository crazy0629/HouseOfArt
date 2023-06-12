import React from "react";
import {
  ArticleListSectionContainer,
  ArticleListSectionWrapper,
  SectionTitle,
  SeeAllItemBtn,
} from "./style";
import { ArtItemList } from "../../../components";

export type ArtListSectionProps = {
  sectionTitle: string;
};
export const ArtListSection: React.FC<ArtListSectionProps> = ({
  sectionTitle,
}) => {
  return (
    <ArticleListSectionWrapper>
      <ArticleListSectionContainer>
        <SectionTitle>{sectionTitle}</SectionTitle>
        <ArtItemList />
        <SeeAllItemBtn>
          <p>SEE ALL {sectionTitle}</p>
        </SeeAllItemBtn>
      </ArticleListSectionContainer>
    </ArticleListSectionWrapper>
  );
};
