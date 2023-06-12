import { styled } from "styled-components";

export const ArtSizeItemWrapper = styled.div`
  border: 1px solid #eaeaea;
  margin-top: 11px;
`;

export const ArtSizeItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 18px;
  padding-top: 13px;
  padding-bottom: 12px;
  padding-right: 18px;
  h1 {
    font-weight: 700;
    font-size: 10px;
    line-height: 20px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #000000;
  }
  h2 {
    font-style: italic;
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
    letter-spacing: 1px;
    color: #8b8b8b;
  }
`;
