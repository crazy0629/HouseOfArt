import React from "react";
import { LandingLayout } from "../../layout/LandingLayout";
import {
  ArtCategorySection,
  ArtListSection,
  AsSeenInSection,
  CustomerSection,
  FollowUsSection,
  HomeSection,
} from "../../modules";

export const LandingPage: React.FC = () => {
  return (
    <LandingLayout>
      <HomeSection />
      <ArtListSection sectionTitle="BESTSELLER" />
      <ArtListSection sectionTitle="NEW ARRIVALS" />
      <ArtListSection sectionTitle="3 PANEL ART" />
      <AsSeenInSection />
      <CustomerSection />
      <ArtCategorySection />
      <FollowUsSection />
    </LandingLayout>
  );
};
