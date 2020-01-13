import React from "react";
import Gallery from "../Gallery/Gallery";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setIsFetching } from "../../redux/reducers/MoviesReducer";
import { RouteComponentProps } from "react-router";


interface GalleryContainerProps {
  imageURL: any,
  galleryDesktop: string[],
  galleryMobile: string[],
  index: number,
  order: number,
  setIsFetching: (boolean: boolean) => boolean,
}



class GalleryContainer extends React.Component<GalleryContainerProps> {
  render() {
    return (
      <>
        <Gallery
          imageURL={this.props.imageURL}
          galleryDesktop={this.props.galleryDesktop}
          galleryMobile={this.props.galleryMobile}
          key={this.props.index}
          order={this.props.order}
        />
      </>
    );
  }
}
const mapStateToProps = state => ({
  galleryDesktop: state.movies.gallery.map(gallery => {
    return `https://image.tmdb.org/t/p/w780${gallery.file_path}`;
  }),
  galleryMobile: state.movies.gallery.map(gallery => {
    return `https://image.tmdb.org/t/p/w342${gallery.file_path}`;
  }),
  setIsFetching: setIsFetching(state),
  isFetching: state.movies.isFetching
});

export default
  connect(mapStateToProps, { setIsFetching: setIsFetching })(GalleryContainer);