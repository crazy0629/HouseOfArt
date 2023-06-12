import React from "react";
import { ArtSizeItemContainer, ArtSizeItemWrapper } from "./style";

export type ArtSizeItemProps = {
  size: string;
  inch: number;
  price: string;
};

export const ArtSizeItem: React.FC<ArtSizeItemProps> = ({
  size,
  inch,
  price,
}) => {
  return (
    <ArtSizeItemWrapper>
      <ArtSizeItemContainer>
        <h1>{size}</h1>
        <h2>
          {inch} x {inch} in
        </h2>
        <h1>{price}</h1>
      </ArtSizeItemContainer>
    </ArtSizeItemWrapper>
  );
};
