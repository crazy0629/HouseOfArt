import React from "react";
import { ArtItemContainer, ArtItemWrapper } from "./style";
import { useNavigate } from "react-router-dom";

export type ArtItemInfoProps = {
  ArtImgUrl: string;
  ArtDesc: string;
  ArtPrice: string;
  ArtSize: number;
};

export const ArtItem: React.FC<ArtItemInfoProps> = ({
  ArtImgUrl,
  ArtDesc,
  ArtPrice,
  ArtSize,
}) => {
  const router = useNavigate();

  return (
    <ArtItemWrapper
      onClick={() =>
        router("/allart/abstract", {
          state: {
            ArtImgUrl,
            ArtDesc,
            ArtPrice,
          },
        })
      }
    >
      <ArtItemContainer>
        <img src={ArtImgUrl} alt="" />
        <h1>{ArtDesc}</h1>
        <h2>
          From {ArtPrice} / {ArtSize} sizes
        </h2>
      </ArtItemContainer>
    </ArtItemWrapper>
  );
};
