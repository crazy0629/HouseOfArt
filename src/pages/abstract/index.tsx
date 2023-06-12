import React from "react";
import { LandingLayout } from "../../layout/LandingLayout";
import { useLocation } from "react-router-dom";
import { AbstractInfoSection } from "../../modules";

export const AbstractPage: React.FC = () => {
  const location = useLocation();
  let ArtImgUrl = location.state.ArtImgUrl;
  let ArtDesc = location.state.ArtDesc;
  let ArtPrice = location.state.ArtPrice;
  return (
    <LandingLayout>
      <AbstractInfoSection
        ArtImgUrl={ArtImgUrl}
        ArtDesc={ArtDesc}
        ArtPrice={ArtPrice}
      />
    </LandingLayout>
  );
};
