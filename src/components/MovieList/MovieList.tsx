import React from "react";
import { Link } from "react-router-dom";
import ROUTES from "../../constants/routes";
import {
  MovieCardContainer,
  MovieTitle,
  Overview,
  PreviewContainer,
  Votes
} from "./Style";

const MovieList = ({ imageUrl, title, overview, id, votes }) => {
  return (
    <MovieCardContainer>
      <Link to={ROUTES.FILM_PAGE + id}>
        <picture>
          <source
            style={{ height: "auto", maxWidth: "100%", borderRadius: "4px" }}
            srcSet={`https://image.tmdb.org/t/p/w185${imageUrl}`}
            media="(min-width: 1144px)"
          />
          <img
            style={{ height: "auto", maxWidth: "100%", borderRadius: "4px" }}
            src={`https://image.tmdb.org/t/p/w154${imageUrl}`}
          />
        </picture>
      </Link>
      <PreviewContainer>
        <MovieTitle>{title}</MovieTitle>
        <Overview>{overview}</Overview>
        <Votes>
          <img
            src={"src/img/star.svg"}
            style={{ display: "block", width: "32px", height: "32px" }}
            alt=""
          />
          {votes}
        </Votes>
      </PreviewContainer>
    </MovieCardContainer>
  );
};
export default MovieList;
