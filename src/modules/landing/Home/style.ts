import styled from "styled-components";

export const HomeSectionWrapper = styled.div`
  padding: 20px 0;
  width: 95%;
  margin: auto;
`;

export const HomeSectionContainer = styled.div`
  background: url("/images/landing/home_image.JPG") no-repeat;
  background-size: cover;
  background-position: center;
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
    text-align: center;
    color: #ffffff;
  }
  @media screen and (max-width: 1024px) {
    h1 {
      font-size: 70px;
    }
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 50px;
      line-height: 70px;
    }
    min-height: 768px;
  }
  @media screen and (max-width: 500px) {
    h1 {
      font-size: 30px;
      line-height: 50px;
    }
    min-height: 768px;
  }
`;

export const ShopNowBtn = styled.div`
  max-width: 328px;
  width: 90%;
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
