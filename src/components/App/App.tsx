import React, { useEffect } from "react";
import { GlobalStyle, MainWrapper, Fallback } from "./Style";
import { Route, Switch, withRouter } from "react-router-dom";
import ROUTES from "../../constants/routes";
import Header from "../Header/Header";
import MoviesListContainer from "../Containers/MovieList/MovieListContainer";
import GenreContainer from "../Containers/GenreContainer";
import FavoriteListContainer from "../Containers/MovieList/FavoriteListContainer";
import ScrollToTopRoute from "../../hoc/ScrollTop";
import { connect } from "react-redux";
import { clearGenres } from "../../redux/index";
import { Location, History } from "history";
import { RouteProps } from "react-router";

const SearchListContainer = React.lazy(() => import("../Containers/MovieList/SearchListContainer"));
const GenreListContainer = React.lazy(() => import("../Containers/MovieList/GenreListContainer"));
const MoviePageContainer= React.lazy(() => import("../Containers/MoviePageContainer"));
const CreditsContainer= React.lazy(() => import("../Containers/CreditsContainer"));


interface AppProps {
  location: Location;
  history: History;
  genresId: string;
  clearGenres: () => void;
}

const App = ({ clearGenres, genresId, location, history }: AppProps & RouteProps) => {
  useEffect(() => {
    if (location.pathname === "/") {
      history.push('/best')
    } 
    if (location.pathname !== "/genres") {
      if(genresId.length > 0)
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
        <Route component={MoviesListContainer} path={ROUTES.HOME} />
        <Route component={SearchListContainer} path={ROUTES.SEARCH_LIST_MOVIES}/>
        <Route component={GenreListContainer} path={ROUTES.GENRES_LIST_MOVIES}
        />
      </Switch>
      </React.Suspense>
    </MainWrapper>
  </>
  );
};

let mapStateToProps = (state) => ({
  clearGenres: clearGenres(),
  genresId: state.movies.genresId
});

export default withRouter(
  connect(mapStateToProps, { clearGenres: clearGenres })(App)
);