import styled from "styled-components";

const MoviePageWrapper = styled.div`
  min-width: 320px;
  width: 360px;
  margin: 0 auto;
   @media (min-width: 768px) {
    max-width: 768px;
    min-width: 768px;
    width: 768px;
  }

  @media (min-width: 1359px) {
    min-width: 1380px;
    max-width: 1380px;
    width: 1380px;
  }
`;

const SimilarMoviesWrapper = styled.div`
@media (max-width: 1359px) {
    margin-left: 2%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center
    margin-bottom: 6%;
}
`;

const MoviePageContainer = styled.article`
  display: flex;
  margin: auto;
  width: 80%;
  margin-left: 60px;
  font-family: Montserrat, sans-serif;
  font-size: 15px;
  @media (max-width: 1359px) {
    flex-direction: column;
  }
  @media (max-width: 768px) {
    margin-left: 0;
    margin: 0 auto;
    width: 100%
  }
`;
const MoviePagePoster = styled.div`
  display: block;
  @media (max-width: 1359px) {
    margin: 0 auto;
  }
`;

const ImageWrapper = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
`;

const GenreList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ProdCompanies = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const TitleSimilarMovies = styled.h2`
  position: relative;
  font-size: 19px;
  position: relative;
  left: 59px;
  width: 196%;
  @media (max-width: 1359px) {
    width: 100%;
    position: relative;
    left: 0;
    margin-left: 4%;
    text-align: center;
  }
`;

const CompaniesWrapper = styled.div`
  border: 5px solid #0e6179;
  padding: 5px 10px;
  display: flex;
  flex-direction: row;
  margin: 0;
  height: 100%;
  width: 100%;
  flex-wrap: wrap;
  justify-content: start;
  @media (max-width: 768px) {
    justify-content: center;
    font-size: 14px;
  }
`;
const CompanyProducer = styled.div`
  align-items: center;
  text-align: center;
  display: flex;
  justify-content: space-around;
  margin: 4px 8px;
`;

const MovieDescription = styled.div`
  margin-top: 68px;
  display: block;
  height: 100%;
`;
const HeadDescription = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 6%;
`;
const Title = styled.h1`
  display: inline-block;
  position: relative;
  left: 282px;
  top: -15px;
  top: -15px;
  font-size: 29px;
  width: 215%;
  text-shadow: 0px 0px 2px;
  font-family: JosefinSans, sans-serif;
  @media (max-width: 1359px) {
    display: flex;
    justify-content: center;
    width: 100%;
    left: 0;
    top: 0;
  }
`;
const InfoField = styled.div`
  display: block;
  height: 40px;
  font-size: 17px;
  flex-basis: 49%;
  flex-grow: 1;
  @media (max-width: 768px) {
    font-size: 14px;
    height: 100%;
  }
`;

const Tagline = styled.div`
  display: block;
  height: 40px;
  font-size: 17px;
  flex-basis: 49%;
  flex-grow: 1;
`;
const Overview = styled.p`
  display: inline-block;
  font-size: 15px;
  flex-basis: 49%;
  flex-grow: 1;
  margin-top: 6px;
`;

const GalleryWrapper = styled.div`
  margin-bottom: 20px;
  width: 100%;
`;
const GalleryTitle = styled.h2`
  text-align: center;
`;

const ImagesContainer = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    background-color: #cedade
    justify-content: center;
    box-shadow: 0 14px 28px 14px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
`;

const SubComponentHeadlineInfo = styled.h3`
display: inline-block
font-family: JosefinSans, sans-serif;
font-size: 18px
`;

const SubComponentHeadline = styled.h3`
display: block
font-family: JosefinSans, sans-serif;
margin-bottom: 6px;
`;
const SubComponentHeadlineGenres = styled.h3`
display: block
font-family: JosefinSans, sans-serif;
margin-bottom: 16px;
width: 100%;
text-align: left
`;

const ButtonShowImage = styled.button`
  display: block;
  width: 60px;
  height: 50px;
`;
const BlockInfo = styled.div`
display: flex;
flex-flow: row wrap;
justify-content: space-around;
margin: 10px 0;
padding: 5px 10px;
border: 5px solid #0e6179;
height: auto;
margin-top: 18px;
@media (max-width: 768px) {
    margin: 24px 0;
}
}
`;
const GenresName = styled.p`
margin-left: 5px;
margin-top: 19px;
&:hover {
    background-color:  #c1b8e4fa;
}
 > a {
    text-decoration: none;
    font-size: 16px;
    color: #151221fc;
    text-shadow: 0px 4px 13px;
 }
}
`;
const CreditsWrapper = styled.button`
  text-align: center;
  border: none;
  outline: none;
  background: transparent;
  font-size: 18px;
  font-weight: 600;
  > a {
    color: black;
    text-decoration: none;
    font-family: Montserrat, sans-serif;
    color: #096cd0f0;
    &:hover {
      text-shadow: 0px 4px 13px;
    }
  }
`;

export {
  MoviePageContainer,
  MoviePagePoster,
  MovieDescription,
  HeadDescription,
  Title,
  Tagline,
  InfoField,
  Overview,
  ImagesContainer,
  ButtonShowImage,
  BlockInfo,
  GenreList,
  ProdCompanies,
  CompaniesWrapper,
  CompanyProducer,
  GenresName,
  SubComponentHeadline,
  SubComponentHeadlineGenres,
  SubComponentHeadlineInfo,
  CreditsWrapper,
  GalleryWrapper,
  GalleryTitle,
  MoviePageWrapper,
  SimilarMoviesWrapper,
  TitleSimilarMovies,
  ImageWrapper
};
