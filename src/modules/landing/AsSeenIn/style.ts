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
  justify-content: space-between;
  align-items: center;
  margin-top: 64px;
  padding-bottom: 194px;
  .vogue {
    width: 294px;
    height: 88px;
    margin-left: 307px;
  }
  .interiors {
    width: 353px;
    height: 122px;
  }
  .house {
    width: 243px;
    height: 90px;
    margin-right: 308px;
  }
`;
