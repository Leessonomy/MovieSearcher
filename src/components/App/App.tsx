import React from "react";
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
import { GlobalStyle, MainWrapper } from "./Style";
import ScrollToTopRoute from "../../hoc/ScrollTop";

const App: React.FunctionComponent = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <MainWrapper>
        <Switch>
          <ScrollToTopRoute
            exact path={ROUTES.FILM_PAGE_DETAIL}
            component={MoviePageContainer}
            RouteKey={true}
          />
          <ScrollToTopRoute
            exact path={ROUTES.FILM_PAGE_CAST}
            component={CreditsContainer}
          />
        </Switch>
        <Switch>
          <Route exact path={ROUTES.HOME}>
            <GenreContainer />
            <MoviesListContainer />
          </Route>
          <Route path={ROUTES.SEARCH_LIST_MOVIES}>
            <GenreContainer />
            <SearchListContainer />
          </Route>
          <Route path={ROUTES.GENRES_LIST_MOVIES}>
            <GenreContainer />
            <GenreListContainer />
          </Route>
          <Route path={ROUTES.FAVORITE_LIST_MOVIES}>
            <FavoriteListContainer />
          </Route>
        </Switch>
      </MainWrapper>
    </>
  );
};

export default withRouter(App);
