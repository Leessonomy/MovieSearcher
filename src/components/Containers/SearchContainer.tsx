import React from "react";
import { connect } from "react-redux";
import { withRouter, RouteProps } from "react-router-dom";
import { requestSearchingMovies, getSearchText } from "../../redux/index";
import { FindField } from "../Header/Style";
import { ISearchProps } from "./Types";

const SearchContainer = ({
  getSearchText,
  requestSearchingMovies,
  history,
  location,
}: ISearchProps & RouteProps) => {
  let onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const page = 1;
    const query = e.target.value.toLowerCase();
    if (query.length > 0) {
      history.push(`/search?q=${query}`);
    } else {
      history.push(`/best`);
    }
    requestSearchingMovies(page, query);

    getSearchText(query);
  };

  return (
    <>
      <label htmlFor="search-input">
        <FindField
          id="search-input"
          type="search"
          placeholder="Search Movies, TV Series ..."
          onChange={onChange}
        />
      </label>
    </>
  );
};

const mapStateToProps = (state) => ({
  text: state.movies.text,
  getSearchText: getSearchText(state),
  requestSearchingMovies: requestSearchingMovies(state),
});

export default withRouter(
  connect(mapStateToProps, {
    requestSearchingMovies: requestSearchingMovies,
    getSearchText: getSearchText,
  })(SearchContainer)
);
