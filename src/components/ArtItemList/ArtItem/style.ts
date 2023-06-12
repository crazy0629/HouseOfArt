import styled from "styled-components";

export const ArtItemWrapper = styled.div``;
export const ArtItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #000000;
  align-items: center;
  text-align: center;
  img {
    max-width: 400px;
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
  h1 {
    font-weight: 700;
    font-size: 18px;
    line-height: 20px;
    letter-spacing: 1.00002px;
    margin-top: 43px;
  }
  h2 {
    font-weight: 500;
    font-size: 18px;
    line-height: 41px;
    text-align: center;
    color: #000000;
  }
`;
