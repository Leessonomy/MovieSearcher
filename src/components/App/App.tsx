import React, { useEffect } from "react";
import { GlobalStyle, MainWrapper, Fallback } from "./Style";
import { Route, Switch, withRouter } from "react-router-dom";
import ROUTES from "../../constants/routes";
import Header from "../Header/header";
import MoviesListContainer from "../Containers/MovieList/MovieListContainer";
import GenreContainer from "../Containers/GenreContainer";
import FavoriteListContainer from "../Containers/MovieList/FavoriteListContainer";
import ScrollToTopRoute from "../../hoc/ScrollTop";
import { connect } from "react-redux";
import { clearGenres } from "../../redux/index";
import { RouteProps } from "react-router";
import { Location } from "history";


const SearchListContainer = React.lazy(() => import("../Containers/MovieList/SearchListContainer"));
const GenreListContainer = React.lazy(() => import("../Containers/MovieList/GenreListContainer"));
const MoviePageContainer= React.lazy(() => import("../Containers/MoviePageContainer"));
const CreditsContainer= React.lazy(() => import("../Containers/CreditsContainer"));


interface AppProps {
  location: Location;
  history: any;
  clearGenres: () => void;
}

const App = ({ clearGenres, location, history }: AppProps & RouteProps) => {
  if (location.pathname === "/") {
    history.push('/best')
  }
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
    <React.Suspense fallback={<Fallback>Loading...</Fallback>}>
      <Switch>
        <ScrollToTopRoute exact path={ROUTES.FILM_PAGE_DETAIL} component={MoviePageContainer} RouteKey={true} />
        <Switch>
          <Route component={CreditsContainer} exact path={ROUTES.FILM_PAGE_CAST} />
          <Route component={FavoriteListContainer} path={ROUTES.FAVORITE_LIST_MOVIES} />
          <GenreContainer />
        </Switch>
      </Switch>
      <Switch>
        <ScrollToTopRoute component={MoviesListContainer} path={ROUTES.HOME} />
        <Route component={SearchListContainer} path={ROUTES.SEARCH_LIST_MOVIES} />
        <Route component={GenreListContainer} path={ROUTES.GENRES_LIST_MOVIES}
        />
      </Switch>
      </React.Suspense>
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