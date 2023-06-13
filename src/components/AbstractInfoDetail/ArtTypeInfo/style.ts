import { styled } from "styled-components";

export const ArtTypeInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 114px;
`;

export const ArtTypeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  h1 {
    font-weight: 400;
    font-size: 9px;
    line-height: 20px;
    letter-spacing: 1.00002px;
    text-transform: uppercase;
    color: #000000;
  }
`;

export const TypeGuid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  h2 {
    font-family: "Georgia";
    font-weight: 400;
    font-size: 13px;
    line-height: 14px;
    color: #000000;
    text-decoration-line: underline;
    padding-left: 1px;
  }
`;

export const ArtTypeContent = styled.div``;

export const ArtTypeItem = styled.div`
  border: 1px solid #eaeaea;
  font-weight: 700;
  font-size: 10px;
  line-height: 20px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #000000;
  padding-left: 18px;
  padding-top: 13px;
  padding-bottom: 12px;
  margin-bottom: 11px;
`;
