import axios from "axios";
import API_KEY from "./ApiKey";
import {
  MoviesResponse,
  PageResponse,
  SimilarResponse,
  GalleryResponse,
} from "./Types";

const instance = axios.create({
  withCredentials: false,
  baseURL: "https://api.themoviedb.org/3/",
});

export const movieAPI = {
  searchMovie(page: number, text: string) {
    return instance
      .get<MoviesResponse>(
        `search/movie?api_key=${API_KEY}&language=en-US&page=${page}&include_adult=true&query=${text}`
      )
      .then((response) => response.data);
  },

  getSearchMovieSortGenre(page: number, genres: number) {
    return instance
      .get<MoviesResponse>(
        `discover/movie?api_key=${API_KEY}&language=en-US&page=${page}&include_adult=true&with_genres=${genres}`
      )
      .then((response) => response.data);
  },

  getTopRatedMovies(page: number) {
    return instance
      .get<MoviesResponse>(
        `movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`
      )
      .then((response) => response.data);
  },

  getSimilarMovies(id: number) {
    return instance
      .get<SimilarResponse>(
        `movie/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`
      )
      .then((response) => response.data.results);
  },

  getMoviePage(id: number) {
    return instance
      .get<PageResponse>(
        `movie/${id}?api_key=${API_KEY}&append_to_response=credits&language=en-US`
      )
      .then((response) => response.data);
  },

  getGallery(id: number) {
    return instance
      .get<GalleryResponse>(`movie/${id}/images?api_key=${API_KEY}`)
      .then((response) => response.data.backdrops);
  },
};
