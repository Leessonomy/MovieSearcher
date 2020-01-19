import React from "react";
import {
  MoviePageContainer,
  MoviePagePoster,
  MovieDescription,
  HeadDescription,
  Title,
  Tagline,
  Overview,
  ImagesContainer,
  SubComponentHeadline,
  SubComponentHeadlineGenres,
  SubComponentHeadlineInfo,
  BlockInfo,
  GenreList,
  ProdCompanies,
  CompaniesWrapper,
  CompanyProducer,
  GenresName,
  CreditsWrapper,
  GalleryWrapper,
  GalleryTitle,
  MoviePageWrapper,
  SimilarMoviesWrapper,
  InfoField,
  ImageWrapper,
  TitleSimilarMovies
} from "./Style";
import FavoriteBtn from "../Containers/FavoriteBtnContainer"
import { Link, withRouter } from "react-router-dom";
import { RouteComponentProps } from "react-router";
import SimilarMovies from "../SimilarMovies/SimilarMovies";
import GalleryContainer from "../Containers/GalleryContainer";
import ROUTES from "../../constants/routes";

interface MoviePageProps {
  match: any,
  productionCompanies: any[],
  spokenLanguages: any[],
  genres: any[],
  imageURL: string,
  budget: string,
  title: string,
  tagline: string,
  runtime: string,
  raiting: string,
  status: string,
  release: string,
  votes: string,
  popularity: string,
  overview: string,
  similarMovies: any[],
  gallery: any[]
}

const MoviePage = ({
  match,
  productionCompanies,
  spokenLanguages,
  genres,
  imageURL,
  budget,
  title,
  tagline,
  runtime,
  raiting,
  status,
  release,
  votes,
  popularity,
  overview,
  similarMovies,
  gallery,
}: MoviePageProps & RouteComponentProps) => {
  const id = match.params.id;
  return (
    <MoviePageWrapper>
      <MoviePageContainer>
        <MoviePagePoster>
          <Title>{title}</Title>
          <ImageWrapper>
            <img
              style={{ 
            marginTop: "6px", boxShadow: "0 0 12px 0 #ccb68b", width: "inherit", borderRadius: "8px", height: "auto"
              }}
              src={`https://image.tmdb.org/t/p/w342${imageURL}`}
            />
          </ImageWrapper>

    <FavoriteBtn id={id} imageURL={imageURL} overwiev={overview} raiting={raiting} title={title}/>

        </MoviePagePoster>
        <MovieDescription>
          <HeadDescription>
            <Tagline>
              <SubComponentHeadline>Tagline:</SubComponentHeadline>
              <br />
              <span>{tagline}</span>
            </Tagline>
            <Overview>
              <SubComponentHeadline>Description:</SubComponentHeadline>
              <br />
              <span>{overview}</span>
            </Overview>
            <BlockInfo>
              <InfoField>
                <SubComponentHeadlineInfo>Raiting:</SubComponentHeadlineInfo>
                <span>{raiting}</span>
              </InfoField>
              <InfoField>
                <SubComponentHeadlineInfo>Votes:</SubComponentHeadlineInfo>
                <span>{votes}</span>
              </InfoField>
              <InfoField>
                <SubComponentHeadlineInfo>Popularity:</SubComponentHeadlineInfo>
                <span>{popularity}</span>
              </InfoField>
              <InfoField>
                <SubComponentHeadlineInfo>Budget:</SubComponentHeadlineInfo>
                <span>{budget}</span>
              </InfoField>
              <InfoField>
                <SubComponentHeadlineInfo>Status:</SubComponentHeadlineInfo>
                <span>{status}</span>
              </InfoField>
              <InfoField>
                <SubComponentHeadlineInfo>
                  Data Realease:
                </SubComponentHeadlineInfo>
                <span>{release}</span>
              </InfoField>
              <InfoField>
                <SubComponentHeadlineInfo>Runtime:</SubComponentHeadlineInfo>
                <span>{runtime} min.</span>
              </InfoField>
              <InfoField>
                <SubComponentHeadlineInfo>Language:</SubComponentHeadlineInfo>
                {spokenLanguages &&
                  spokenLanguages.map((lang: any, index: number) => {
                    return <span key={index}>{lang.name}</span>;
                  })}
              </InfoField>
            </BlockInfo>
            <CreditsWrapper>
              <Link to={ROUTES.FILM_PAGE + id + ROUTES.PAGE_CAST}>
                Full Credits
              </Link>
            </CreditsWrapper>
            <GenreList>
              <SubComponentHeadline>Genres:</SubComponentHeadline>
              {genres &&
                genres.map((genre, index) => {
                  return (
                    <GenresName>
                      <Link key={index} to={`/genres?=${genre.id}`}>
                        {genre.name}
                      </Link>
                    </GenresName>
                  );
                })}
            </GenreList>
            <ProdCompanies>
              <SubComponentHeadlineGenres>
                Product Companies:
              </SubComponentHeadlineGenres>
              <CompaniesWrapper>
                {productionCompanies &&
                  productionCompanies.map((prod: any, index: number) => {
                    if (prod.logo_path == null) {
                      return (
                        <CompanyProducer key={index}>
                          {prod.name}
                          <br />({prod.origin_country || "unknown"})
                        </CompanyProducer>
                      );
                    }
                    return (
                      <CompanyProducer key={index}>
                        <div>
                          <picture>
                            <source
                              srcSet={`https://image.tmdb.org/t/p/w92${prod.logo_path}`}
                              style={{ display: "block" }}
                              media="(min-width: 760px)"
                            />
                            <img
                              src={`https://image.tmdb.org/t/p/w45${prod.logo_path}`}
                              style={{ display: "block" }}
                            />
                          </picture>
                        </div>
                      </CompanyProducer>
                    );
                  })}
              </CompaniesWrapper>
            </ProdCompanies>
            <GalleryWrapper>
              <GalleryTitle>Poster Gallery:</GalleryTitle>
              <ImagesContainer>
                {gallery.map((galleryImg: any, index: number) => {
                  return (
                    <GalleryContainer
                      imageURL={galleryImg.file_path}
                      key={index}
                      order={index}
                      id={id}
                    />
                  );
                })}
              </ImagesContainer>
            </GalleryWrapper>
          </HeadDescription>
        </MovieDescription>
        <SimilarMoviesWrapper>
          <TitleSimilarMovies>Simillar Movies</TitleSimilarMovies>
          {similarMovies.map((recommendMovies: any) => {
            let sortedOverview =
              recommendMovies.overview.length > 210
                ? recommendMovies.overview.slice(0, 210) + "..."
                : recommendMovies.overview;
            return (
              <SimilarMovies
                imageURL={recommendMovies.poster_path}
                id={recommendMovies.id}
                overview={sortedOverview}
                title={recommendMovies.title}
              />
            );
          })}
        </SimilarMoviesWrapper>
      </MoviePageContainer>
    </MoviePageWrapper>
  );
};

export default withRouter(MoviePage);
