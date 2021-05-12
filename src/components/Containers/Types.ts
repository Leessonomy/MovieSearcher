import { IHistoryApi, IMovie } from "./MovieList/Types";

export interface IMovieDescription {
  id: string | number;
  imageURL: string;
  raiting: number;
  title: string;
  overview: string;
}

export interface IMovieInfo {
  id: string | number;
  imageURL: string;
  raiting: number;
  title: string;
  overview: string;
  original_language: string;
  original_title: string;
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: {
    backdrop_path: string;
    id: number;
    name: string;
    poster_path: string;
  };
  budget: number;
  credits: {
    cast: ICast[];
    crew: ICrew[];
  };
  genres: IGenre[];
  homepage: string;
  imdb_id: string;
  popularity: number;
  poster_path: string;
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  production_country: [];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: {
    english_name: string;
    name: string;
  }[];
  status: string;
  tagline: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IGallery {
  aspect_ratio: number;
  file_path: string;
  height: number;
  iso_639_1: number;
  vote_average: number;
  vote_count: number;
  width: number;
}

export interface IGenre {
  id: number;
  name: string;
  active?: boolean;
}

export type ICast = {
  character: string;
  name: string;
};

export interface ICrew {
  department: string;
  name: string;
  job: string;
}

export interface IFavoriteButtonProps {
  id: string;
  imageURL: string;
  raiting: number;
  title: string;
  overview: string;
  favoriteMovies: IMovieDescription[];
  addFavorites: (movieListPages: IMovieDescription) => void;
  deleteFavorites: (id: string) => void;
}

export interface IGalleryContainerProps {
  imageURL: string;
  galleryDesktop: string[];
  galleryMobile: string[];
  index: number;
  order: number;
  setIsFetching: (boolean: boolean) => boolean;
}

export interface IMoviePageContainerProps {
  movie: IMovieInfo;
  gallery: IGallery[];
  isFetching: boolean;
  match: any;
  similarMovies: IMovie[];
  requestMoviePage: (id: number) => void;
  requestSimilarMovies: (id: number) => void;
  requestGallery: (id: number) => void;
}

export interface ICastInfoContainerProps extends Pick<IHistoryApi, "history"> {
  credits: {
    cast: ICast[];
    crew: ICrew[];
  };
}

export interface ISearchProps extends Pick<IHistoryApi, "history"> {
  text: string;
  location: object;
  getSearchText: (value: string) => void;
  requestSearchingMovies: (page: number, text: string) => void;
}

export interface IGenresProps extends IHistoryApi {
  genresId: string;
  genres: IGenre[];
  genreList: string;
  addGenreSucces: (selected: string) => void;
  deleteGenreSucces: (selected: string) => void;
  requestSearchingMoviesByGenre: (page: number, genresId: string) => void;
}
