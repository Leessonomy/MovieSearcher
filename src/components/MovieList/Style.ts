import styled from "styled-components";

const MovieListStub = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-size: 35px;
  font-family: Segoe;
  font-weight: 800;
  @media (max-width: 1024px) {
    position: absolute;
    font-size: 18px;
    height: 100%;
  }
`;

const MainPageContainer = styled.div`
  position: relative;
  background-color: #f8f9fa;
  height: 100%;
  display: flex;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 20px;
`;

const MoviesWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
  @media (max-width: 767px) {
    margin-top: 190px;
    width: 100%;
  }
  @media (min-width: 767px) and (max-width: 1144px) {
    margin-left: 8%;
  }
`;

const MoviesFavoriteWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
  @media (max-width: 767px) {
    width: 100%;
  }
  @media (min-width: 767px) and (max-width: 1144px) {
    margin-left: 8%;
  }
`;

const MovieCardContainer = styled.div`
  margin-top: 33px;
  margin-right: 25px;
  margin-left: 25px;
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
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  flex-direction: column;
  position: relative;

  @media (max-width: 1144px) {
    margin-left: 20px;
    margin-right: 20px;
    height: 340px;
    width: 340px;
  }

  @media (max-width: 767px) {
    height: 332px;
    margin-left: 15px;
    margin-right: 15px;
  }
`;

const PreviewContainer = styled.div`
  font-size: 14px;
  padding-left: 18px;
  @media (max-width: 767px) {
    font-size: 12px;
    padding-left: 6px;
  }
`;

const MovieTitle = styled.h4`
  display: inline-block;
  width: 170px;
  text-align: center;
  margin: auto;
  @media (max-width: 767px) {
    width: 110px;
  }
`;
const Overview = styled.p`
  width: 183px;
  word-wrap: break-word;
  min-height: 301px;
  @media (max-width: 1144px) {
    width: 166px;
    height: 100%;
  }
  @media (max-width: 767px) {
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
  @media (max-width: 1143px) {
    right: calc(89% - 10px);
    top: 261px;
  }
`;

export {
  MovieListStub,
  MoviesWrapper,
  MoviesFavoriteWrapper,
  MovieCardContainer,
  MovieTitle,
  MainPageContainer,
  ButtonTransition,
  Overview,
  PreviewContainer,
  Votes,
};
