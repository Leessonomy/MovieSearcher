import React from "react";
import { Link } from "react-router-dom";
import ROUTES from "../../constants/routes";
import {
  MovieCardContainer,
  MovieTitle,
  Overview,
  PreviewContainer,
  Votes,
} from "./Style";
import stubImage from "../../img/stub-image.png";
import starImage from "../../img/star.svg";
import { IMovieDescription } from "../Containers/Types";
import { IMovie } from "../Containers/MovieList/Types";

const MovieList = ({ imageURL, title, overview, id, raiting }: IMovie) => {
  return (
    <MovieCardContainer>
      <Link to={ROUTES.FILM_PAGE + id}>
        {imageURL ? (
          <picture>
            <source
              style={{ height: "auto", maxWidth: "100%", borderRadius: "4px" }}
              srcSet={`https://image.tmdb.org/t/p/w185${imageURL}`}
              media="(min-width: 1144px)"
            />
            <img
              style={{ height: "auto", maxWidth: "100%", borderRadius: "4px" }}
              src={`https://image.tmdb.org/t/p/w154${imageURL}`}
            />
          </picture>
        ) : (
          <picture>
            <source
              style={{ height: "auto", width: "185px", borderRadius: "4px" }}
              srcSet={stubImage}
              media="(min-width: 1144px)"
            />
            <img
              style={{ height: "auto", width: "154px", borderRadius: "4px" }}
              src={stubImage}
            />
          </picture>
        )}
      </Link>
      <PreviewContainer>
        <MovieTitle>{title || <i>Not Available</i>}</MovieTitle>
        <Overview>{overview || <i>Not Available</i>}</Overview>
        <Votes>
          <img
            src={starImage}
            style={{ display: "block", width: "32px", height: "32px" }}
          />
          {raiting}
        </Votes>
      </PreviewContainer>
    </MovieCardContainer>
  );
};
export default MovieList;
