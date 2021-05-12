import { IMovie } from "../Containers/MovieList/Types";
import { IGallery, IGenre } from "../Containers/Types";

export interface IMoviePageProps {
  match: any;
  similarMovies: IMovie[];
  gallery: IGallery[];
  imageURL: string;
  raiting: number;
  title: string;
  overview: string;
  budget: number;
  genres: IGenre[];
  popularity: number;
  productionCompanies: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  release: string;
  runtime: number;
  spokenLanguages: {
    english_name: string;
    name: string;
  }[];
  status: string;
  tagline: string;
  votes: number;
}
