import { styled } from "styled-components";

export const AbstractInfoWrapper = styled.div``;

export const AbstractInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AbstractInfoHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  h1 {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    text-decoration-line: underline;
    color: #000000;
  }
  h2 {
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    letter-spacing: -4px;
    color: #000000;
    margin-left: 10px;
    margin-right: 10px;
  }
  h3 {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #999999;
  }
`;

export const AbstractInfoContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 95%;
  margin: auto;
  margin-top: 64px;
  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;
