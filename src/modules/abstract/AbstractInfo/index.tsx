import React from "react";
import {
  AbstractInfoContainer,
  AbstractInfoHeader,
  AbstractInfoWrapper,
  AbstractInfoContent,
} from "./style";
import { AbstractInfoImage } from "../../../components";
import { AbstractInfoDetail } from "../../../components";

export type AbstractInfoProps = {
  ArtImgUrl: string;
  ArtDesc: string;
  ArtPrice: string;
};

export const AbstractInfoSection: React.FC<AbstractInfoProps> = ({
  ArtImgUrl,
  ArtDesc,
  ArtPrice,
}) => {
  return (
    <AbstractInfoWrapper>
      <AbstractInfoContainer>
        <AbstractInfoHeader>
          <h1>All Art</h1>
          <h2>{"<"}</h2>
          <h1>Abstract</h1>
          <h2>{"<"}</h2>
          <h3>{ArtDesc}</h3>
        </AbstractInfoHeader>
        <AbstractInfoContent>
          <AbstractInfoImage ArtImgUrl={ArtImgUrl} />
          <AbstractInfoDetail ArtDesc={ArtDesc} ArtPrice={ArtPrice} />
        </AbstractInfoContent>
      </AbstractInfoContainer>
    </AbstractInfoWrapper>
  );
};
