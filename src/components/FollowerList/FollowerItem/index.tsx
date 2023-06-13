import React from "react";
import {
  ArtImage,
  FollowerAvatar,
  FollowerInfo,
  FollowerItemContainer,
  FollowerItemWrapper,
  FollowerProfile,
} from "./style";

export type FollowerInfoProps = {
  ArtImgUrl: string;
  FollowerAvatarUrl: string;
  FollowerName: string;
  FollowerContact: string;
};

export const FollowerItem: React.FC<FollowerInfoProps> = ({
  ArtImgUrl,
  FollowerAvatarUrl,
  FollowerName,
  FollowerContact,
}) => {
  return (
    <FollowerItemWrapper>
      <FollowerItemContainer>
        <ArtImage>
          <img src={ArtImgUrl} alt="" />
        </ArtImage>
        <FollowerProfile>
          <FollowerAvatar>
            <img src={FollowerAvatarUrl} alt="" />
          </FollowerAvatar>
          <FollowerInfo>
            <h6>{FollowerName}</h6>
            <span>{FollowerContact}</span>
          </FollowerInfo>
        </FollowerProfile>
      </FollowerItemContainer>
    </FollowerItemWrapper>
  );
};
