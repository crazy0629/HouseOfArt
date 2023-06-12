import { styled } from "styled-components";

export const ArtChooseFrameWrapper = styled.div`
  margin-top: 54px;
`;

export const ArtChooseFrameContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ArtFrameHeader = styled.div`
  display: flex;
  flex-direction: row;
  h1 {
    font-family: "Helvetica";
    font-weight: 400;
    font-size: 9px;
    line-height: 20px;
    letter-spacing: 1.00002px;
    text-transform: uppercase;
    color: #000000;
  }
  h2 {
    font-weight: 700;
    font-size: 10px;
    line-height: 20px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #000000;
    padding-left: 17px;
  }
`;

export const ArtFrameContent = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 18px;
  img {
    padding-right: 40px;
  }
  @media screen and (max-width: 500px) {
    img {
      padding-right: 25px;
    }
  }
`;
