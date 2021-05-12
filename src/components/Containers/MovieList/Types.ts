import { Location, History } from "history";

export interface IHistoryApi {
  location: Location;
  history: History;
}

export interface IState {
  currentPage: number;
}

export interface IMovie {
  id: number;
  title: string;
  poster_path?: string;
  vote_average?: number;
  imageURL?: string;
  overview: string;
  raiting?: number;
}

export interface IFavoriteListContainerProps {
  favoriteMovies: IMovie[];
  getFavorites: () => void;
}

export interface IMovieListContainerProps extends IHistoryApi {
  movies: IMovie[];
  totalPages: number;
  isFetching: boolean;
  requestMovies: (page: number) => void;
}

export interface IGenreListContainerProps extends IHistoryApi {
  movies: IMovie[];
  genresId: number[];
  totalPages: number;
  isFetching: boolean;
  requestSearchingMoviesByGenre: (page: number, genresId: number[]) => void;
  addGenreSucces: (convertedId: number[]) => void;
}

export interface ISearchListContainerProps extends IHistoryApi {
  movies: IMovie[];
  text: string;
  totalPages: number;
  isFetching: boolean;
  requestSearchingMovies: (currentPage: number, text: string) => void;
  getSearchText: (query: string) => void;
}
