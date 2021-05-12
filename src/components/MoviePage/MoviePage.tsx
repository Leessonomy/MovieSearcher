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
  StubSimilar,
} from "./Style";
import FavoriteBtn from "../Containers/FavoriteBtnContainer";
import { Link, withRouter } from "react-router-dom";
import { RouteComponentProps } from "react-router";
import SimilarMovies from "../SimilarMovies/SimilarMovies";
import GalleryContainer from "../Containers/GalleryContainer";
import ROUTES from "../../constants/routes";
import stubImage from "../../img/stub-image.png";
import { IMoviePageProps } from "./Types";

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
}: IMoviePageProps & RouteComponentProps) => {
  const id = match.params.id;
  return (
    <MoviePageWrapper>
      <MoviePageContainer>
        <MoviePagePoster>
          <Title>{title || "Not Available"}</Title>
          <ImageWrapper>
            {imageURL ? (
              <img
                style={{
                  marginTop: "6px",
                  boxShadow: "0 0 12px 0 #ccb68b",
                  width: "inherit",
                  borderRadius: "8px",
                  height: "auto",
                }}
                src={`https://image.tmdb.org/t/p/w342${imageURL}`}
              />
            ) : (
              <img
                style={{
                  marginTop: "6px",
                  borderRadius: "8px",
                  height: "auto",
                  width: "342px",
                }}
                src={stubImage}
              />
            )}
          </ImageWrapper>

          <FavoriteBtn
            key={id}
            id={id}
            imageURL={imageURL}
            overview={overview}
            raiting={raiting}
            title={title}
          />
        </MoviePagePoster>
        <MovieDescription>
          <HeadDescription>
            <Tagline>
              <Subheadline>Tagline:</Subheadline>
              <br />
              <span>{tagline || "Not Available"}</span>
            </Tagline>
            <Overview>
              <Subheadline>Description:</Subheadline>
              <br />
              <span>{overview || "Not Available"}</span>
            </Overview>
            <BlockInfo>
              <InfoField>
                <SubheadlineInfo>Raiting:</SubheadlineInfo>
                <span> {raiting || "Not Available"}</span>
              </InfoField>
              <InfoField>
                <SubheadlineInfo>Votes:</SubheadlineInfo>
                <span> {votes || "Not Available"}</span>
              </InfoField>
              <InfoField>
                <SubheadlineInfo>Popularity:</SubheadlineInfo>
                <span> {popularity || "Not Available"}</span>
              </InfoField>
              <InfoField>
                <SubheadlineInfo>Budget:</SubheadlineInfo>
                <span> {budget || "Not Available"}</span>
              </InfoField>
              <InfoField>
                <SubheadlineInfo>Status:</SubheadlineInfo>
                <span> {status || "Not Available"}</span>
              </InfoField>
              <InfoField>
                <SubheadlineInfo>Data Realease:</SubheadlineInfo>
                <span> {release || "Not Available"}</span>
              </InfoField>
              <InfoField>
                <SubheadlineInfo>Runtime:</SubheadlineInfo>
                <span> {runtime || "Not Available"} min.</span>
              </InfoField>
              <InfoField>
                <SubheadlineInfo>Language:</SubheadlineInfo>
                {spokenLanguages &&
                  spokenLanguages.map((lang, index) => {
                    return (
                      <span key={index}>{lang.name || "Not Available"}</span>
                    );
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
                genres.map((genre) => {
                  return (
                    <GenresName key={genre.id}>
                      <Link to={`/genres?=${genre.id}`}>
                        {genre.name || "Not Available"}
                      </Link>
                    </GenresName>
                  );
                })}
            </GenreList>
            <ProdCompanies>
              <SubheadlineGenres>Product Companies:</SubheadlineGenres>
              <CompaniesWrapper>
                {productionCompanies &&
                  productionCompanies.map((prod, index) => {
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
              {gallery.length > 0 ? (
                <ImagesContainer>
                  {gallery.map((galleryImg, index) => {
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
                <StubGallery>Not Available</StubGallery>
              )}
            </GalleryWrapper>
          </HeadDescription>
        </MovieDescription>

        <SimilarMoviesWrapper>
          <TitleSimilarMovies>Similar Movies</TitleSimilarMovies>
          {similarMovies.length > 0 ? (
            similarMovies.map((recommendMovies) => {
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
            <StubSimilar>Not Available</StubSimilar>
          )}
        </SimilarMoviesWrapper>
      </MoviePageContainer>
    </MoviePageWrapper>
  );
};

export default withRouter(MoviePage);
