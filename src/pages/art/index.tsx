import React from "react";
import { LandingLayout } from "../../layout/LandingLayout";
import {
  ArtFilterSection,
  ArtHomeSection,
  ArtShowSection,
} from "../../modules";

export const ArtPage: React.FC = () => {
  return (
    <LandingLayout>
      <ArtHomeSection />
      <ArtFilterSection />
      <ArtShowSection />
    </LandingLayout>
  );
};
