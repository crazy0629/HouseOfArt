import styled from "styled-components";

export const AsSeenInSectionWrapper = styled.div`
  margin-top: 190px;
`;

export const AsSeenInSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #000000;
  h1 {
    font-weight: 600;
    font-size: 22px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 1.00002px;
    color: #ffffff;
    padding-top: 77px;
  }
`;

export const ImageList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 194px;
  max-width: 1240px;
  width: 95%;
  margin: auto;
  margin-top: 64px;
  img {
    height: auto;
  }
  .vogue {
    width: 294px;
  }
  .interiors {
    width: 353px;
  }
  .house {
    width: 243px;
  }
  @media screen and (max-width: 1024px) {
    img {
      width: 200px !important;
    }
  }
  @media screen and (max-width: 650px) {
    img {
      width: 150px !important;
    }
  }
  @media screen and (max-width: 470px) {
    flex-direction: column;
    align-items: center;
    .vogue {
      width: 294px !important;
      margin-bottom: 20px;
    }
    .interiors {
      width: 300px !important;
      margin-bottom: 20px;
    }
    .house {
      width: 243px !important;
    }
  }
`;
