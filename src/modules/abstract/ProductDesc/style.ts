import { styled } from "styled-components";

export const ProductDescSectionWrapper = styled.div`
  margin-top: 150px;
`;

export const ProductDescSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductDescTab = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2rem;
  border-bottom: 1px solid #eaeaea;
  margin-left: 100px;
  margin-right: 100px;
`;

export const TabItem = styled.div<{ isSelected?: boolean }>`
  position: relative;
  margin-right: 10px;
  padding-bottom: 15px;
  cursor: pointer;

  &:after {
    position: absolute;
    top: 100%;
    left: 0%;
    width: ${({ isSelected }) => (isSelected ? `100%` : `0px`)};
    height: 3px;
    background: #000000;
    transition: all ease-in-out 0.2s;
    content: "";
  }
`;

export const DescGroup = styled.div`
  width: 50%;
  h1 {
    font-weight: 700;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0.88px;
    text-transform: uppercase;
    color: #000000;
  }
  h2 {
    margin-top: 9px;
    font-weight: 400;
    font-size: 13px;
    line-height: 24px;
    color: #666666;
    width: 473px;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProductContent = styled.div`
  display: flex;
  flex-direction: row;
`;
