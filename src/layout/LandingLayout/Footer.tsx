import React from "react";
import {
  ContactIcons,
  CopyRightSection,
  FooterContactSection,
  FooterContainer,
  FooterMenuSection,
  FooterWrapper,
  MenuItem,
} from "./style";
import { useNavigate } from "react-router-dom";

export const Footer: React.FC = () => {
  const router = useNavigate();

  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterMenuSection>
          <MenuItem>
            <h1>INFORMATION</h1>
            <p>About Us</p>
            <p>Shipping & Returns</p>
            <p>Terms</p>
            <p>Privacy</p>
          </MenuItem>
          <MenuItem>
            <h1>SHOP</h1>
            <p onClick={() => router("/allart")}>All Art</p>
            <p>Gift Cards</p>
          </MenuItem>
          <MenuItem>
            <h1>SUPPORT</h1>
            <p>FAQs</p>
            <p>Contact Us</p>
          </MenuItem>
        </FooterMenuSection>
        <FooterContactSection>
          <img src="/images/header/logo.png" alt="" />
          <h2>info@house-of-art.co</h2>
          <ContactIcons>
            <img className="shape" src="/images/footer/shape.png" alt="" />
            <img className="tiktok" src="/images/footer/TikTok.png" alt="" />
          </ContactIcons>
        </FooterContactSection>
      </FooterContainer>
      <CopyRightSection>
        <p>© 2023, HOUSE of ART. All Rights Reserved.</p>
      </CopyRightSection>
    </FooterWrapper>
  );
};
