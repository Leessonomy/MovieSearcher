import React, { useState, useEffect } from "react";
import { GlobalStyle, MainWrapper } from "./Style";
import { Route, Switch, withRouter } from "react-router-dom";
import ROUTES from "../../constants/routes";
import Header from "../Header/header";
import MoviesListContainer from "../Containers/MovieList/MovieListContainer";
import SearchListContainer from "../Containers/MovieList/SearchListContainer";
import GenreContainer from "../Containers/GenreContainer";
import GenreListContainer from "../Containers/MovieList/GenreListContainer";
import FavoriteListContainer from "../Containers/MovieList/FavoriteListContainer";
import MoviePageContainer from "../Containers/MoviePageContainer";
import CreditsContainer from "../Containers/CreditsContainer";
import ScrollToTopRoute from "../../hoc/ScrollTop";
import { connect } from "react-redux";
import { clearGenres } from "../../redux/index";
import { RouteProps } from "react-router";
import { Location } from "history";

interface AppProps {
  location: Location;
  clearGenres: () => void;
}

const App = ({ clearGenres, location }: AppProps & RouteProps) => {
  useEffect(() => {
    if (location.pathname !== "/genres") {
      clearGenres();
    }
  }, [location.pathname]);

  return (
    <>
      <GlobalStyle />
      <Header />
      <MainWrapper>
        <Switch>
          <ScrollToTopRoute exact path={ROUTES.FILM_PAGE_DETAIL} component={MoviePageContainer} RouteKey={true} />
          <Switch>
            <Route component={CreditsContainer} exact path={ROUTES.FILM_PAGE_CAST} />
            <Route component={FavoriteListContainer} path={ROUTES.FAVORITE_LIST_MOVIES} />
            <GenreContainer />
          </Switch>
        </Switch>
        <Switch>
          <Route component={MoviesListContainer} exact path={ROUTES.HOME} />
          <Route component={SearchListContainer} path={ROUTES.SEARCH_LIST_MOVIES} />
          <Route component={GenreListContainer} path={ROUTES.GENRES_LIST_MOVIES}
          />
        </Switch>
      </MainWrapper>
    </>
  );
};

let mapStateToProps = state => ({
  clearGenres: clearGenres()
});

export default withRouter(
  connect(mapStateToProps, { clearGenres: clearGenres })(App)
);
