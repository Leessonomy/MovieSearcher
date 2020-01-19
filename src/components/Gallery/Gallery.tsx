import React from "react";
import {
  ZoomImageGallery,
  ZoomGalleryBackground,
  GalleryWrapper,
  ButtonPrev,
  ButtonNext,
  ButtonClose,
  PreviewImages,
  ImageWrapper
} from "./Style";
import PreloaderGallery from "../Common/Preloader/PreloaderGallery";
import { withRouter } from "react-router-dom";
import { RouteComponentProps } from "react-router";

interface GalleryProps {
  match: any;
  history: any;
  imageURL: string;
  galleryDesktop: string[];
  galleryMobile: string[];
  order: number;
}

interface GalleryState {
  isOpen: boolean;
  loaded: boolean;
  indexImage: any;
}

class Gallery extends React.Component<
  RouteComponentProps & GalleryProps,
  GalleryState
> {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      loaded: false,
      indexImage: 0
    };
  }

  handlerClickOpen = e => {
    let gettingIndex = e.currentTarget.getAttribute("data-index");
    let convertedIndex = Number(gettingIndex);

    this.setState({ indexImage: convertedIndex }, () => {
      this.setState(prevState => ({
        indexImage: prevState.indexImage
      }));
    });
    this.props.history.push(
      `/movie/${this.props.match.params.id}?image=${convertedIndex}`
    );
  };

  closeImage = () => {
    this.setState(
      {
        isOpen: false
      },
      () => {
        this.props.history.push(`/movie/${this.props.match.params.id}`);
      }
    );
  };

  openImage = () => {
    this.setState({
      isOpen: true
    });
  };

  handlerTransition = e => {
    let counterImage = this.state.indexImage;
    if (e.currentTarget.dataset.direction === "next") {
      ++counterImage;
    } else if (e.currentTarget.dataset.direction === "prev") {
      --counterImage;
    }
    this.setState({ indexImage: counterImage }, () => {
      this.props.history.push(
        `/movie/${this.props.match.params.id}?image=${this.state.indexImage}`
      );
    });
  };

  loadImage = () => {
    this.setState({ loaded: true });
  };

  render() {
    const { imageURL } = this.props;
    const { loaded } = this.state;
    let galleryDisabledNextBtn =
      this.props.galleryDesktop.length - 1 > this.state.indexImage
        ? false
        : true;
    let galleryDisabledPrevBtn = this.state.indexImage > 0 ? false : true;
    return (
      <>
        <ImageWrapper onClick={this.openImage}>
          <PreviewImages
            onClick={this.handlerClickOpen}
            data-index={this.props.order}
            src={`https://image.tmdb.org/t/p/w185${imageURL}`}
            alt=""
          />
        </ImageWrapper>
        <>
          {this.state.isOpen ? (
            <GalleryWrapper>
              <ZoomGalleryBackground>
                <ButtonClose onClick={this.closeImage}>X</ButtonClose>
                <picture>
                  <ZoomImageGallery
                    onLoad={this.loadImage}
                    srcSet={this.props.galleryDesktop[this.state.indexImage]}
                    media="(min-width: 760px)"
                  />
                  <img
                    onLoad={this.loadImage}
                    src={this.props.galleryMobile[this.state.indexImage]}
                  />
                </picture>
                {!loaded && <PreloaderGallery />}
                <ButtonNext
                  disabled={galleryDisabledNextBtn}
                  data-direction="next"
                  onClick={this.handlerTransition}
                />
                <ButtonPrev
                  disabled={galleryDisabledPrevBtn}
                  data-direction="prev"
                  onClick={this.handlerTransition}
                />
              </ZoomGalleryBackground>
            </GalleryWrapper>
          ) : null}
        </>
      </>
    );
  }
}

export default withRouter(Gallery);
