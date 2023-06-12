import { styled } from "styled-components";

export const ReviewInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  span {
    font-weight: 400;
    font-size: 13px;
    line-height: 26px;
    color: #666666;
  }
`;

export const ReviewStar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  img {
    padding-right: 1px;
  }
`;
