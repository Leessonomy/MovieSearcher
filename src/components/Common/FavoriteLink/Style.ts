import styled from "styled-components";

const FavoriteWrapper = styled.div`
position relative;
width: 81%;
    > a {
        text-decoration: none;
        color: wheat;
        text-shadow: 0px 0px 2px;
        color: wheat;
        font-size: 22px;
        @media (max-width: 767px) {
            font-size: 13px;
            width: 75%;
        }
    }
`;

const CounterFavoriteList = styled.span`
  text-shadow: 0px 0px 2px;
  color: #d4bcbc;
  font-size: 22px;
  @media (max-width: 767px) {
    font-size: 13px;
  }
`;

export { FavoriteWrapper, CounterFavoriteList };
