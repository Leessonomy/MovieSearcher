export type MoviesResponse = {
  page: number;
  total_results: number;
  total_pages: number;
  number;
  results: [
    {
      popularity: number;
      vote_count: number;
      video: boolean;
      poster_path: string;
      id: number;
      adult: boolean;
      backdrop_path: string;
      original_language: string;
      original_title: string;
      genre_ids: number[];
      title: string;
      vote_average: number;
      overview: string;
      release_date: string;
    }
  ];
};

export type PageResponse = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: number;
  budget: number;
  genres: object[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: object[];
  production_countries: object[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: object[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  credits: object;
};

export type SimilarResponse = {
  page: number;
  total_results: number;
  total_pages: number;
  number;
  results: [
    {
      id: number;
      video: boolean;
      vote_count: number;
      vote_average: number;
      title: string;
      release_date: string;
      original_language: string;
      original_title: string;
      genre_ids: number[];
      backdrop_path: string;
      adult: boolean;
      overview: string;
      poster_path: string;
      popularity: number;
    }
  ];
};

export type Gallery = {
  backdrops: [
    {
      aspect_ratio: number;
      file_path: string;
      height: number;
      iso_639_1: number;
      vote_average: number;
      vote_count: number;
      width: number;
    }
  ];
};
