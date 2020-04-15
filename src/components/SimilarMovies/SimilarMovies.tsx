import React from "react";
import { SimilarMovieCard, CardDescription, Overview, Name } from "./Style";
import { Link } from "react-router-dom";
import ROUTES from "../../constants/routes";

const SimilarMovies = ({ imageURL, title, overview, id }) => {
  return (
    <SimilarMovieCard>
      <CardDescription>
        <Link to={ROUTES.FILM_PAGE + id}>
          <Name>{title}</Name>
          <picture>
            <source
              srcSet={`https://image.tmdb.org/t/p/w185${imageURL}`}
              style={{ height: "auto", width: "auto", borderRadius: "6px" }}
              media="(min-width: 1360px)"
            />
            <source
              srcSet={`https://image.tmdb.org/t/p/w154${imageURL}`}
              style={{ height: "auto", width: "auto", borderRadius: "6px" }}
              media="(min-width: 760px)"
            />
            <img
              src={`https://image.tmdb.org/t/p/w92${imageURL}`}
              style={{ height: "auto", width: "auto", borderRadius: "6px" }}
            />
          </picture>
          <Overview>{overview}</Overview>
        </Link>
      </CardDescription>
    </SimilarMovieCard>
  );
};

export default SimilarMovies;
