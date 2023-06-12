import { styled } from "styled-components";

export const LandingLayoutWrapper = styled.div``;

export const LandingContainer = styled.div``;

export const HeaderWrapper = styled.div``;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LeftNavigation = styled.div`
  display: flex;
  flex-direction: row;
`;

export const RightNavigation = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 50px;
`;

export const LogoSection = styled.div`
  padding-top: 11px;
  padding-bottom: 11px;
  img {
    width: 250px;
    height: 55px;
  }
`;

export const AnnouncementBar = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  background-color: #000000;
  padding-top: 10px;
  padding-bottom: 10px;
  p {
    width: 100%;
    color: #ffffff;
    font-weight: 500;
    font-size: 12px;
    line-height: 19px;
    .italic {
      font-style: italic;
    }
    .bold {
      font-weight: 800;
    }
  }
`;

export const LeftNaviItem = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: #131313;
  padding-left: 30px;
  img {
    margin-left: 7px;
  }
  display: flex;
  align-items: center;
`;

export const RightNavItem = styled.div`
  padding-right: 30px;
  .dropdown {
    margin-left: 10px;
  }
  display: flex;
  align-items: center;
`;

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-width: 1px 0px;
  border-style: solid;
  border-color: #eaeaea;
  margin-top: 227px;
`;

export const CopyRightSection = styled.div`
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #000000;
    padding-left: 88px;
    margin-top: 64px;
    margin-bottom: 17px;
  }
`;
export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FooterMenuSection = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 54px;
  padding-left: 18px;
`;

export const MenuItem = styled.div`
  color: #000000;
  margin-left: 70px;
  h1 {
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 1px;
    margin-bottom: 17px;
  }
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 10px;
    cursor: pointer;
  }
`;

export const FooterContactSection = styled.div`
  padding-top: 46px;
  margin-right: 135px;
  img {
    width: 149px;
    height: 41px;
  }
  h2 {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: #000000;
  }
`;

export const ContactIcons = styled.div`
  display: flex;
  align-items: center;
  .shape {
    width: 23px;
    height: 23px;
  }
  .tiktok {
    width: 30px;
    height: 30px;
  }
  img {
    margin-right: 10px;
  }
`;
