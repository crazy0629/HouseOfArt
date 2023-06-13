import React from "react";
import {
  ArtChooseFrameContainer,
  ArtChooseFrameWrapper,
  ArtFrameContent,
  ArtFrameHeader,
} from "./style";

export const ArtChooseFrame: React.FC = () => {
  return (
    <ArtChooseFrameWrapper>
      <ArtChooseFrameContainer>
        <ArtFrameHeader>
          <h1>Choose Your Frame</h1>
          <h2>BLACK</h2>
        </ArtFrameHeader>
        <ArtFrameContent>
          <img src="/images/art_abstract/frame1.png" alt="" />
          <img src="/images/art_abstract/frame2.png" alt="" />
          <img src="/images/art_abstract/frame3.png" alt="" />
          <img src="/images/art_abstract/frame4.png" alt="" />
          <img src="/images/art_abstract/frame5.png" alt="" />
        </ArtFrameContent>
      </ArtChooseFrameContainer>
    </ArtChooseFrameWrapper>
  );
};
