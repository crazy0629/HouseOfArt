import styled from "styled-components";

export const ArticleListSectionWrapper = styled.div`
  margin-top: 160px;
  @media screen and (max-width: 500px) {
    text-align: center;
  }
`;

export const ArticleListSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1240px;
  width: 95%;
  margin: auto;
`;

export const SectionTitle = styled.div`
  font-weight: 700;
  font-size: 30px;
  line-height: 16px;
  letter-spacing: 1px;
  color: #000000;
  margin-bottom: 78px;
`;

export const SeeAllItemBtn = styled.div`
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
