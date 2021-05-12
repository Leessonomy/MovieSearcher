import { combineReducers, createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import moviesReducer from "./Reducers/MoviesReducer";

const reducer = combineReducers({
  movies: moviesReducer,
});

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default store;
