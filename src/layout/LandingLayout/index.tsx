import React from "react";
import { LandingContainer, LandingLayoutWrapper } from "./style";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const LandingLayout: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  children,
}) => {
  return (
    <LandingLayoutWrapper>
      <Header />
      <LandingContainer>{children}</LandingContainer>
      <Footer />
    </LandingLayoutWrapper>
  );
};
