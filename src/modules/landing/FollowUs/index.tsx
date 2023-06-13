import React from "react";
import {
  FollowUsSectionContainer,
  FollowUsSectionWrapper,
  SectionDesc,
  SectionTitle,
} from "./style";
import { FollowerList } from "../../../components";

export const FollowUsSection: React.FC = () => {
  return (
    <FollowUsSectionWrapper>
      <FollowUsSectionContainer>
        <SectionTitle>follow us on instagram</SectionTitle>
        <SectionDesc>@HOUSEOFARTCO</SectionDesc>
        <FollowerList />
      </FollowUsSectionContainer>
    </FollowUsSectionWrapper>
  );
};
