export interface IState {
  movie: [];
  movies: [];
  similarMovies: [];
  favoriteMovies: [];
  gallery: [];
  page: number;
  totalPages: number;
  text: string;
  genresId: number[];
  genreList: {}[];
  isFetching: boolean;
}
