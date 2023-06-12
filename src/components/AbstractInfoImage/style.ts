import { styled } from "styled-components";

export const EffectImage = styled.div`
  img {
    max-width: 454px;
    width: 100%;
    height: 501px;
    object-fit: cover;
  }
`;

export const NormalImage = styled.div`
  margin-top: 229px;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    max-width: 750px;
    width: 100%;
    object-fit: cover;
    height: auto;
  }
  @media screen and (max-width: 900px) {
    margin-top: 50px;
    margin-bottom: 50px;
  }
`;

export const AbstractInfoImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 900px) {
    width: 100%;
    max-width: 400px;
  }
`;
