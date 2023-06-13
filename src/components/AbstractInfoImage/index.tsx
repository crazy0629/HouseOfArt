import React from "react";
import { AbstractInfoImageWrapper, EffectImage, NormalImage } from "./style";

export type AbstractInfoImageProps = {
  ArtImgUrl: string;
};

export const AbstractInfoImage: React.FC<AbstractInfoImageProps> = ({
  ArtImgUrl,
}) => {
  return (
    <AbstractInfoImageWrapper>
      <EffectImage>
        <img src={ArtImgUrl} alt="" />
      </EffectImage>
      <NormalImage>
        <img src={ArtImgUrl} alt="" />
        <img src={ArtImgUrl} alt="" />
      </NormalImage>
    </AbstractInfoImageWrapper>
  );
};
