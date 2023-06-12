import React from "react";
import { FollowerListContainer, FollowerListWrapper } from "./style";
import { FollowerListArray } from "./data";
import { FollowerItem } from "./FollowerItem";

export const FollowerList: React.FC = () => {
  return (
    <FollowerListWrapper>
      <FollowerListContainer>
        {FollowerListArray.map((item, key) => {
          return (
            <FollowerItem
              key={key}
              ArtImgUrl={item.ArtImgUrl}
              FollowerAvatarUrl={item.FollowerAvatarUrl}
              FollowerName={item.FollowerName}
              FollowerContact={item.FollowerContact}
            />
          );
        })}
      </FollowerListContainer>
    </FollowerListWrapper>
  );
};
