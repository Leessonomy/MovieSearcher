import axios from "axios";
import API_KEY from "./ApiKey";

const instance = axios.create({
  withCredentials: false,
  baseURL: "https://api.themoviedb.org/3/"
});

export const movieAPI = {
  searchMovie(page, text) {
    return instance
      .get(`search/movie?api_key=${API_KEY}&language=en-US&page=${page}&include_adult=true&query=${text}`).then(res => {
        return res.data;
      });
  },
  getSearchMovieSortGenre(page, genres) {
    return instance.get(`discover/movie?api_key=${API_KEY}&language=en-US&page=${page}&include_adult=true&with_genres=${genres}`)
      .then(res => {
        return res.data;
      });
  },

  getTopRatedMovies(page) {
    return instance
      .get(`movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`)
      .then(res => {
        return res.data;
      });
  },

  getMoviePage(id) {
    return instance
      .get(`movie/${id}?api_key=${API_KEY}&append_to_response=credits&language=en-US`)
      .then(res => {
        return res.data;
      });
  },

  getSimilarMovies(id) {
    return instance
      .get(`movie/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`)
      .then(res => {
        return res.data.results;
      });
  },

  getGallery(id) {
    return instance.get(`movie/${id}/images?api_key=${API_KEY}`).then(res => {
      return res.data.backdrops;
    });
  },


};
