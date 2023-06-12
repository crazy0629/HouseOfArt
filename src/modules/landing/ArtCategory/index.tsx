import React from "react";
import {
  ArtCategorySectionContainer,
  ArtCategorySectionWrapper,
  CategoryGroup,
  CategoryItem,
  SectionContent,
  SectionTitle,
  ShopAllBtn,
} from "./style";

export const ArtCategorySection: React.FC = () => {
  return (
    <ArtCategorySectionWrapper>
      <ArtCategorySectionContainer>
        <SectionTitle>ART BY CATEGORY </SectionTitle>
        <SectionContent>
          <CategoryGroup>
            <CategoryItem>ABSTRACT</CategoryItem>
            <CategoryItem>B&W</CategoryItem>
            <CategoryItem>COLORS</CategoryItem>
            <CategoryItem>CUBISM</CategoryItem>
            <CategoryItem>citySCAPE</CategoryItem>
            <CategoryItem>GEOMETRIC</CategoryItem>

            <CategoryItem>MINIMALISM</CategoryItem>
            <CategoryItem>SURREALISM</CategoryItem>
            <CategoryItem>PAINTED</CategoryItem>
            <CategoryItem>STREET ART</CategoryItem>
            <CategoryItem>Urban</CategoryItem>
          </CategoryGroup>
        </SectionContent>
        <ShopAllBtn>
          <p>SHOP ALL</p>
        </ShopAllBtn>
      </ArtCategorySectionContainer>
    </ArtCategorySectionWrapper>
  );
};
