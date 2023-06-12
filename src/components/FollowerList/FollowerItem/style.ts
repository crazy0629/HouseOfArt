import styled from "styled-components";

export const FollowerItemWrapper = styled.div``;

export const FollowerItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 3px 6px #ececec;
  padding-bottom: 12px;
  max-width: 269px;
  margin: auto;
`;

export const ArtImage = styled.div`
  img {
    width: 100%;
    height: 269px;
    object-fit: cover;
  }
`;

export const FollowerProfile = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const FollowerAvatar = styled.div`
  padding-left: 13px;
  img {
    width: 32px;
    height: 32px;
  }
`;

export const FollowerInfo = styled.div`
  padding-left: 13px;
  display: flex;
  flex-direction: column;
  h6 {
    font-weight: 700;
    font-size: 9px;
    line-height: 16px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #000000;
    margin-top: 1px;
  }
  span {
    font-weight: 400;
    font-size: 11px;
    line-height: 16px;
    color: #666666;
  }
`;
