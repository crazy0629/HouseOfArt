import styled from "styled-components";

export const ArtCategorySectionWrapper = styled.div`
  margin-top: 176px;
  width: 90%;
  margin: auto;
  @media screen and (max-width: 500px) {
    margin-top: 70px;
  }
`;

export const ArtCategorySectionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SectionTitle = styled.div`
  font-weight: 900;
  font-size: 30px;
  line-height: 31px;
  text-align: center;
  letter-spacing: 1.00008px;
  text-transform: uppercase;
  color: #000000;
  margin-bottom: 80px;
  @media screen and (max-width: 500px) {
    margin-bottom: 50px;
  }
`;

export const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ShopAllBtn = styled.div`
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

export const CategoryGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin-bottom: 43px;
  flex-wrap: wrap;
  @media screen and (max-width: 1180px) {
    justify-content: center;
  }
`;

export const CategoryItem = styled.div`
  font-weight: 700;
  font-size: 48px;
  line-height: 48px;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #131313;
  margin: 0 5px;
  margin-top: 43px;
  @media screen and (max-width: 1180px) {
    margin: 0 20px;
    margin-top: 43px;
  }
  @media screen and (max-width: 500px) {
    font-size: 30px;
    margin-top: 20px;
  }
`;
