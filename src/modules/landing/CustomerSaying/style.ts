import styled from "styled-components";

export const CustomerSectionWrapper = styled.div`
  margin-top: 183px;
`;

export const CustomerSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    text-align: center;
    letter-spacing: 1px;
    color: #000000;
  }
  h2 {
    font-family: "Georgia";
    font-style: italic;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: #000000;
    margin-top: 17px;
  }
`;

export const AssessList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SeeAllBtn = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 1.00002px;
  color: #000000;
  margin-top: 68px;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    border-bottom: 1px solid #000000;
    width: fit-content;
    text-align: center;
  }
`;

export const GoToLeft = styled.div``;

export const GoToRight = styled.div``;
