import React from "react";
import { GlobalStyle, MainWrapper } from "./Style";
import { Route, Switch, withRouter } from "react-router-dom";
import ROUTES from "../../constants/routes";
import Header from "../Header/header";
import HomePage from "../Links&Buttons/HomeLink/HomePage";
import MoviesListContainer from "../Containers/MovieList/MovieListContainer";
import SearchListContainer from "../Containers/MovieList/SearchListContainer";
import GenreContainer from "../Containers/GenreContainer";
import GenreListContainer from "../Containers/MovieList/GenreListContainer";
import FavoriteListContainer from "../Containers/MovieList/FavoriteListContainer";
import MoviePageContainer from "../Containers/MoviePageContainer";
import CreditsContainer from "../Containers/CreditsContainer";
import ScrollToTopRoute from "../../hoc/ScrollTop";

const App: React.FunctionComponent = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <MainWrapper>
        <Switch>
        <Route exact path={ROUTES.FILM_PAGE_DETAIL}>
          <ScrollToTopRoute
            component={MoviePageContainer}
            RouteKey={true} />
                      <HomePage />
          </Route>
          <Route exact path={ROUTES.FILM_PAGE_CAST}>
          <ScrollToTopRoute component={CreditsContainer} />
          <HomePage />
            </Route>
        </Switch>
        <Switch>
          <Route exact path={ROUTES.HOME}>
            <GenreContainer />
            <MoviesListContainer />
          </Route>
          <Route path={ROUTES.SEARCH_LIST_MOVIES}>
          <HomePage />
            <GenreContainer />
            <SearchListContainer />
          </Route>
          <Route path={ROUTES.GENRES_LIST_MOVIES}>
          <HomePage />
            <GenreContainer />
            <GenreListContainer />
          </Route>
          <Route path={ROUTES.FAVORITE_LIST_MOVIES}>
          <HomePage />
            <FavoriteListContainer />
          </Route>
        </Switch>
      </MainWrapper>
    </>
  );
};

export default withRouter(App);
