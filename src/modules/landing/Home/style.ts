import styled from "styled-components";

export const HomeSectionWrapper = styled.div`
  padding: 20px 30px;
`;

export const HomeSectionContainer = styled.div`
  background: url("/images/landing/home_image.JPG") no-repeat;
  background-size: cover;
  min-height: 1040px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-weight: 700;
    font-size: 96px;
    line-height: 106px;
    letter-spacing: 2.16px;
    color: #ffffff;
  }
`;

export const ShopNowBtn = styled.div`
  width: 328px;
  height: 48px;
  background-color: #ffffff;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  letter-spacing: 1.00002px;
  color: #000000;
`;
