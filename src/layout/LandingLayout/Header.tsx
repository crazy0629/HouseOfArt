import React from "react";
import {
  AnnouncementBar,
  HeaderContainer,
  HeaderWrapper,
  LeftNaviItem,
  LeftNavigation,
  LogoSection,
  NavBar,
  RightNavItem,
  RightNavigation,
} from "./style";

export const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <NavBar>
          <LeftNavigation>
            <LeftNaviItem>
              SHOP ALL
              <img src="/images/header/dropdown.png" alt="" />
            </LeftNaviItem>
            <LeftNaviItem>BESTSELLERS</LeftNaviItem>
            <LeftNaviItem>NEW ARRIVALS</LeftNaviItem>
          </LeftNavigation>
          <LogoSection>
            <img src="/images/header/logo.png" alt="" />
          </LogoSection>
          <RightNavigation>
            <RightNavItem>
              <img src="/images/header/us.svg.png" alt="" />
              <img
                src="/images/header/dropdown.png"
                alt=""
                className="dropdown"
              />
            </RightNavItem>
            <RightNavItem>
              <img src="/images/header/search.png" alt="" />
            </RightNavItem>
            <RightNavItem>
              <img src="/images/header/lock.png" alt="" />
            </RightNavItem>
          </RightNavigation>
        </NavBar>
        <AnnouncementBar>
          <p>
            WANT TO WIN <span className="bold">$500</span> WORTH OF HOUSE{" "}
            <span className="italic">of</span> ART SHOP VALUE?{" "}
            <span className="bold">ENTER TO WIN</span>
          </p>
        </AnnouncementBar>
      </HeaderContainer>
    </HeaderWrapper>
  );
};
