import styled from "styled-components";

const HomeWrapper = styled.div`
  position: relative;
  width: 55%;
  z-index: 99;
  > a {
    text-decoration: none;
    color: wheat;
    text-shadow: 0px 0px 2px;
    font-size: 22px;
    text-transform: uppercase;
    @media (max-width: 767px) {
      font-size: 13px;
    }
  }
`;

export { HomeWrapper };
