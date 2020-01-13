import styled from "styled-components";

const MainPageContainer = styled.div`
    display: flex;
    width: 86%;
    justify-content: center;
    @media (max-width: 720px) {
        margin-left: 19%;
    }
}
`;

const MoviesWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
`;

const MovieCardContainer = styled.div`
  margin-top: 33px;
  margin-right: 30px;
  margin-left: 30px;
  width: 186px;
  height: 346px;
  width: 390px;
  background-color: #eee;
  border: 1px solid#999;
  padding: 2px;
  color: #000;
  text-align: left;
  font-family: Segoe;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  position: relative;
  @media (max-width: 1024px) {
    margin-left: 25px;
    margin-right: 25px;
    height: 346px;
    width: 370px;
  }

  @media (max-width: 720px) {
    height: 332px;
    width: 290px;
    margin-left: 15px;
    margin-right: 15px;
  }
`;

const PreviewContainer = styled.div`
  font-size: 14px;
  padding-left: 18px;
  @media (max-width: 720px) {
    font-size: 12px;
    padding-left: 6px;
  }
`;

const MovieTitle = styled.h4`
  display: inline-block;
  width: 170px;
  text-align: center;
  margin: auto;
  @media (max-width: 720px) {
    width: 110px;
  }
`;
const Overview = styled.p`
  width: 183px;
  word-wrap: break-word;
  @media (max-width: 1024px) {
    width: 166px;
    height: 100%;
  }
  @media (max-width: 720px) {
    width: 128px;
  }
`;
const ButtonTransition = styled.button`
  position: fixed;
  width: 80px;
  height: 50px;
  right: 25px;
`;

const Votes = styled.p`
  font-weight: 600;
  font-size: 15px;
  position: absolute;
  right: calc(91% - 10px);
  top: 279px;
  @media (max-width: 720px) {
    right: calc(89% - 10px);
    top: 254px;
  }
`;

export {
  MoviesWrapper,
  MovieCardContainer,
  MovieTitle,
  MainPageContainer,
  ButtonTransition,
  Overview,
  PreviewContainer,
  Votes
};
