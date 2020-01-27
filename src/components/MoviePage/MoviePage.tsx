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
  Subheadline,
  SubheadlineGenres,
  SubheadlineInfo,
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
  TitleSimilarMovies,
  StubGallery,
  StubSimillar
} from "./Style";
import FavoriteBtn from "../Containers/FavoriteBtnContainer";
import BackBtn from "../Links&Buttons/BackBtn/BackBtn";
import { Link, withRouter } from "react-router-dom";
import { RouteComponentProps } from "react-router";
import SimilarMovies from "../SimilarMovies/SimilarMovies";
import GalleryContainer from "../Containers/GalleryContainer";
import ROUTES from "../../constants/routes";

interface MoviePageProps {
  match: any;
  productionCompanies: any[];
  spokenLanguages: any[];
  genres: any[];
  imageURL: string;
  budget: string;
  title: string;
  tagline: string;
  runtime: string;
  raiting: string;
  status: string;
  release: string;
  votes: string;
  popularity: string;
  overview: string;
  similarMovies: any[];
  gallery: any[];
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
  gallery
}: MoviePageProps & RouteComponentProps) => {
  const id = match.params.id;
  return (
    <MoviePageWrapper>
       <BackBtn />
      <MoviePageContainer>
        <MoviePagePoster>
          <Title>{title}</Title>
          <ImageWrapper>
            <img style={{ marginTop: "6px", boxShadow: "0 0 12px 0 #ccb68b", width: "inherit", borderRadius: "8px", height: "auto" }}
              src={`https://image.tmdb.org/t/p/w342${imageURL}`}
            />
          </ImageWrapper>

          <FavoriteBtn
            key={id}
            id={id}
            imageURL={imageURL}
            overwiev={overview}
            raiting={raiting}
            title={title}
          />
        </MoviePagePoster>
        <MovieDescription>
          <HeadDescription>
            <Tagline>
              <Subheadline>Tagline:</Subheadline>
              <br />
              <span>{tagline}</span>
            </Tagline>
            <Overview>
              <Subheadline>Description:</Subheadline>
              <br />
              <span>{overview}</span>
            </Overview>
            <BlockInfo>
              <InfoField>
                <SubheadlineInfo>Raiting:</SubheadlineInfo>
                <span> {raiting}</span>
              </InfoField>
              <InfoField>
                <SubheadlineInfo>Votes:</SubheadlineInfo>
                <span> {votes}</span>
              </InfoField>
              <InfoField>
                <SubheadlineInfo>Popularity:</SubheadlineInfo>
                <span> {popularity}</span>
              </InfoField>
              <InfoField>
                <SubheadlineInfo>Budget:</SubheadlineInfo>
                <span> {budget}</span>
              </InfoField>
              <InfoField>
                <SubheadlineInfo>Status:</SubheadlineInfo>
                <span> {status}</span>
              </InfoField>
              <InfoField>
                <SubheadlineInfo>Data Realease:</SubheadlineInfo>
                <span> {release}</span>
              </InfoField>
              <InfoField>
                <SubheadlineInfo>Runtime:</SubheadlineInfo>
                <span> {runtime} min.</span>
              </InfoField>
              <InfoField>
                <SubheadlineInfo>Language:</SubheadlineInfo>
                {spokenLanguages &&
                  spokenLanguages.map((lang: any, index: number) => {
                    return <span key={index}> {lang.name}</span>;
                  })}
              </InfoField>
            </BlockInfo>
            <CreditsWrapper>
              <Link to={ROUTES.FILM_PAGE + id + ROUTES.PAGE_CAST}>
                Full Credits
              </Link>
            </CreditsWrapper>
            <GenreList>
              <Subheadline>Genres:</Subheadline>
              {genres &&
                genres.map(genre => {
                  return (
                    <GenresName key={genre.id}>
                      <Link to={`/genres?=${genre.id}`}>{genre.name}</Link>
                    </GenresName>
                  );
                })}
            </GenreList>
            <ProdCompanies>
              <SubheadlineGenres>Product Companies:</SubheadlineGenres>
              <CompaniesWrapper>
                {productionCompanies &&
                  productionCompanies.map((prod: any, index: number) => {
                    if (prod.logo_path === null) {
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
                            <img src={`https://image.tmdb.org/t/p/w45${prod.logo_path}`}
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
              {gallery.length > 0 ? (
                <ImagesContainer>
                  {gallery.map((galleryImg: any, index: number) => {
                    return (
                      <GalleryContainer
                        key={index}
                        id={id}
                        order={index}
                        imageURL={galleryImg.file_path}
                      />
                    );
                  })}
                </ImagesContainer>
              ) : (
                <StubGallery>Not Aviable</StubGallery>
              )}
            </GalleryWrapper>
          </HeadDescription>
        </MovieDescription>

        <SimilarMoviesWrapper>
          <TitleSimilarMovies>Simillar Movies</TitleSimilarMovies>
          {similarMovies.length > 0 ? (
            similarMovies.map((recommendMovies: any) => {
              let sortedOverview =
                recommendMovies.overview.length > 210
                  ? recommendMovies.overview.slice(0, 210) + "..."
                  : recommendMovies.overview;
              return (
                <SimilarMovies
                  key={recommendMovies.id}
                  imageURL={recommendMovies.poster_path}
                  id={recommendMovies.id}
                  overview={sortedOverview}
                  title={recommendMovies.title}
                />
              );
            })
          ) : (
            <StubSimillar>Not Aviable</StubSimillar>
          )}
        </SimilarMoviesWrapper>
      </MoviePageContainer>
    </MoviePageWrapper>
  );
};

export default withRouter(MoviePage);
