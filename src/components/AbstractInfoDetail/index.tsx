import React from "react";
import { AbstractInfoDetailWrapper } from "./style";
import { ReivewInfo } from "./ReviewInfo";
import { ArtTypeInfo } from "./ArtTypeInfo";
import { ArtChooseFrame } from "./ArtChooseFrame";
import { ArtChooseSize } from "./ArtChooseSize";

export type AbstractInfoDetailProps = {
  ArtDesc: string;
  ArtPrice: string;
};

export const AbstractInfoDetail: React.FC<AbstractInfoDetailProps> = ({
  ArtDesc,
  ArtPrice,
}) => {
  return (
    <AbstractInfoDetailWrapper>
      <ReivewInfo />
      <h5>{ArtDesc}</h5>
      <h6>{ArtPrice}</h6>
      <ArtTypeInfo />
      <ArtChooseFrame />
      <ArtChooseSize />
    </AbstractInfoDetailWrapper>
  );
};
