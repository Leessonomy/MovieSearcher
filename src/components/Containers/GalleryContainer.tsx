import React from "react";
import { connect } from "react-redux";
import { setIsFetching } from "../../store/index";
import { RouteComponentProps } from "react-router";
import { IGalleryContainerProps } from "./Types";
import Gallery from "../Gallery/Gallery";

class GalleryContainer extends React.PureComponent<
  IGalleryContainerProps & RouteComponentProps
> {
  render() {
    return (
      <>
        <Gallery
          imageURL={this.props.imageURL}
          galleryDesktop={this.props.galleryDesktop}
          galleryMobile={this.props.galleryMobile}
          key={this.props.order}
          order={this.props.order}
        />
      </>
    );
  }
}
const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  galleryDesktop: state.movies.gallery.map(
    (gallery) => `https://image.tmdb.org/t/p/w780${gallery.file_path}`
  ),
  galleryMobile: state.movies.gallery.map(
    (gallery) => `https://image.tmdb.org/t/p/w342${gallery.file_path}`
  ),
  setIsFetching: setIsFetching(state),
  isFetching: state.movies.isFetching,
});

export default connect(mapStateToProps, { setIsFetching: setIsFetching })(
  GalleryContainer
);
