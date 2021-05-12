import React from "react";
import Gallery from "../Gallery/Gallery";
import { connect } from "react-redux";
import { setIsFetching } from "../../redux/index";
import { RouteComponentProps } from "react-router";
import { IGalleryContainerProps } from "./Types";

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
