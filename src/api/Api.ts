import axios from "axios";
import API_KEY from "./ApiKey";
import {
  MoviesResponse,
  PageResponse,
  SimilarResponse,
  Gallery,
} from "./ApiTypes";

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
      .then((res) => {
        return res.data;
      });
  },
  getSearchMovieSortGenre(page: number, genres: number) {
    return instance
      .get<MoviesResponse>(
        `discover/movie?api_key=${API_KEY}&language=en-US&page=${page}&include_adult=true&with_genres=${genres}`
      )
      .then((res) => {
        return res.data;
      });
  },

  getTopRatedMovies(page: number) {
    return instance
      .get<MoviesResponse>(
        `movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`
      )
      .then((res) => {
        return res.data;
      });
  },

  getMoviePage(id: number) {
    return instance
      .get<PageResponse>(
        `movie/${id}?api_key=${API_KEY}&append_to_response=credits&language=en-US`
      )
      .then((res) => {
        return res.data;
      });
  },

  getSimilarMovies(id: number) {
    return instance
      .get<SimilarResponse>(
        `movie/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`
      )
      .then((res) => {
        return res.data.results;
      });
  },

  getGallery(id: number) {
    return instance
      .get<Gallery>(`movie/${id}/images?api_key=${API_KEY}`)
      .then((res) => {
        return res.data.backdrops;
      });
  },
};
