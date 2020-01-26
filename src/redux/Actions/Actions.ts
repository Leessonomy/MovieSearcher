import {ActionType} from './ActionType';
import {createAction} from './ActionCreaterTypes';
import {ActionsUnion} from './ActionsUnion';

export const actions = {
    addGenreSucces: (genre: any) => createAction(ActionType.GET_GENRE, genre),
    deleteGenreSucces: (genre: number) => createAction(ActionType.DELETE_GENRE, genre),
    clearGenres: () => createAction(ActionType.CLEAR_GENRES),
    
    getMoviePageSucces: (movie: []) => createAction(ActionType.GET_MOVIE, movie),
    getSimilarMovies: (similarMovies: []) => createAction(ActionType.GET_SIMILAR_MOVIES, similarMovies),
    getGallery: (gallery: []) => createAction(ActionType.GET_GALLERY, gallery),
    ///
    getMoviesSucces: (movies: []) => createAction(ActionType.GET_MOVIES, movies),
    getMoviesWithGenreSucces: (movies: []) => createAction(ActionType.GET_MOVIE_WITH_GENRE, movies),
    getSearchingSucces: (movies: []) => createAction(ActionType.GET_SEARCHING_MOVIES, movies),
    ///
    getSearchText: (text: string) => createAction(ActionType.GET_TEXT, text),
    getTotalPages: (totalPages: number) => createAction(ActionType.GET_TOTAL_PAGES, totalPages),
    ///
    setIsFetching: (isFetching: boolean) => createAction(ActionType.TOGGLE_IS_FETCHING, isFetching),
    ///
    getFavorites: () => createAction(ActionType.GET_FAVORITE_LIST),
    addFavorites: (favorite: []) => createAction(ActionType.ADD_FAVORITE_LIST, favorite),
    deleteFavorites: (id: number) => createAction(ActionType.DELETE_FAVORITE_LIST, id),
    }
    
    export type Actions = ActionsUnion<typeof actions>