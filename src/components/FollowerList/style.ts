import styled from "styled-components";

export const FollowerListWrapper = styled.div`
  width: 95%;
  margin: auto;
  margin-top: 126px;
  @media screen and (max-width: 500px) {
    margin-top: 70px;
  }
`;

export const FollowerListContainer = styled.div`
  display: flex;
  flex-direction: row;
  & > :not(:first-child) {
    margin-left: 36px;
  }
  @media screen and (max-width: 1240px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 36px;
    & > :not(:first-child) {
      margin-left: 0;
    }
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;
