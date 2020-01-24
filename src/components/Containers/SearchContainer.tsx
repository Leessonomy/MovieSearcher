import React, { useEffect, useRef } from "react";
import { FindField } from "../Header/Style";
import { requestSearchingMovies, getSearchText } from "../../redux/index";
import { connect } from "react-redux";
import { withRouter, RouteProps } from "react-router-dom";

interface SearchProps {
  text: string;
  history: any;
  location: object;
  getSearchText: (value: string) => void;
  requestSearchingMovies: (page: number, text: string) => void;
}

const SearchContainer = ({
  getSearchText,
  requestSearchingMovies,
  history,
  location
}: SearchProps & RouteProps) => {
  const mounted = useRef<boolean>(false);

  useEffect(() => {
    let el = document.querySelector("header")!;
    if (!mounted.current) {
      mounted.current = true;
    } else {

      if (location.pathname.slice(0, 7) == "/movie/") {
        el.style.position = "static";
      }
      if (location.pathname == "/") {
        el.style.position = "sticky";
      }
    }
  });

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

const mapStateToProps = state => ({
  text: state.movies.text,
  requestSearchingMovies: requestSearchingMovies(state),
  getSearchText: getSearchText(state)
});

export default withRouter(
  connect(mapStateToProps, {
    requestSearchingMovies: requestSearchingMovies,
    getSearchText: getSearchText
  })(SearchContainer)
);
