import styled from "styled-components";

export const ArtFilterSectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  padding-top: 37px;
  padding-bottom: 40px;
  border-top: 1px solid #cbcbcb;
  border-bottom: 1px solid #cbcbcb;
`;

export const ArtFilterSectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 95%;
  .select-box {
    width: 120px;
  }
  @media screen and (max-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    .select-box {
      width: 100%;
    }
  }
`;

export const ArtFilterList = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 30px;
  @media screen and (max-width: 600px) {
    padding-right: 0;
  }
`;

export const FilterName = styled.div`
  font-weight: 700;
  font-size: 10px;
  line-height: 14px;
  display: flex;
  align-items: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #000000;
  margin-bottom: 8px;
`;

export const ResetFilter = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  text-decoration-line: underline;
  color: #000000;
`;
