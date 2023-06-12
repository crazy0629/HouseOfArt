import styled from "styled-components";

export const ArtShowSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 95%;
  margin: auto;
  margin-top: 100px;
`;

export const ArtShowSectionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 100px;
  @media screen and (max-width: 1140px) {
    grid-gap: 50px;
  }
  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const ArtShowDesc = styled.div`
  margin-top: 200px;
  font-weight: 700;
  font-size: 22px;
  line-height: 25px;
  text-align: center;
  letter-spacing: 1.00002px;
  text-transform: uppercase;
  color: #ff0000;
`;
