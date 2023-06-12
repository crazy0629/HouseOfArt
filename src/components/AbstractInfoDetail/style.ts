import { styled } from "styled-components";

export const AbstractInfoDetailWrapper = styled.div`
  display: flex;
  margin-left: 30px;
  flex-direction: column;
  flex: 1;
  h5 {
    font-weight: 700;
    font-size: 30px;
    line-height: 48px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #000000;
  }
  h6 {
    font-weight: 400;
    font-size: 24px;
    line-height: 26px;
    letter-spacing: 0.8334px;
    text-transform: uppercase;
    color: #000000;
  }
  @media screen and (max-width: 900px) {
    margin-left: 0;
    width: 100%;
  }
`;

export const AddToCartBtn = styled.div`
  font-weight: 700;
  font-size: 9px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #ffffff;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 18px 0;
  background: #2e2e2e;
  border: 1px solid #2e2e2e;
  margin-top: 60px;
`;

export const PrintedAndFramed = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  span {
    font-family: "Georgia";
    font-style: italic;
    font-weight: 400;
    font-size: 13px;
    line-height: 24px;
    color: #000000;
    padding-left: 10px;
  }
`;
