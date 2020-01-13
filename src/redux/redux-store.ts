import { combineReducers, createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import moviesReducer from "./reducers/MoviesReducer";

let reducers = combineReducers({
  movies: moviesReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
