import React from "react";
import {
  ArtTypeContent,
  ArtTypeHeader,
  ArtTypeInfoWrapper,
  ArtTypeItem,
  TypeGuid,
} from "./style";

export const ArtTypeInfo: React.FC = () => {
  return (
    <ArtTypeInfoWrapper>
      <ArtTypeHeader>
        <h1>Choose Your TYPE</h1>
        <TypeGuid>
          <img src="/images/art_abstract/arttypeguide.png" alt="" />
          <h2>Type Guide</h2>
        </TypeGuid>
      </ArtTypeHeader>
      <ArtTypeContent>
        <ArtTypeItem>FINE ART PRINT</ArtTypeItem>
        <ArtTypeItem>gallery wrap</ArtTypeItem>
        <ArtTypeItem>framed gallery wrap</ArtTypeItem>
      </ArtTypeContent>
    </ArtTypeInfoWrapper>
  );
};
