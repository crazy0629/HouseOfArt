import styled from "styled-components";

export const CustomerAssessWrapper = styled.div``;

export const CustomerAssessContainer = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  h3 {
    font-family: "Georgia";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 41px;
    text-align: center;
    color: #000000;
  }
  h4 {
    font-family: "Helvetica";
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #000000;
  }
  @media screen and (max-width: 500px) {
    h3 {
      font-size: 18px;
    }
  }
`;

export const AssessStar = styled.div`
  display: flex;
  justify-content: center;
`;
