import React from "react";
import {
  ZoomImageGallery,
  ZoomGalleryBackground,
  GalleryWrapper,
  ButtonPrev,
  ButtonNext,
  ButtonClose,
  PreviewImages,
  ImageWrapper,
} from "./Style";
import PreloaderGallery from "../Common/Preloader/PreloaderGallery";
import { withRouter } from "react-router-dom";
import { RouteComponentProps } from "react-router";
import { IGalleryProps, IState } from "./Types";

class Gallery extends React.Component<
  RouteComponentProps & IGalleryProps,
  IState
> {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      loaded: false,
      indexImage: 0,
    };
  }

  handlerClickOpen = (e: React.MouseEvent) => {
    const { history, match } = this.props;
    const gettingIndex = (e.currentTarget as HTMLElement).getAttribute(
      "data-index"
    );
    const convertedIndex = Number(gettingIndex);

    this.setState({ indexImage: convertedIndex }, () => {
      this.setState((prevState) => ({
        indexImage: prevState.indexImage,
      }));
    });
    history.push(`/movie/${match.params.id}?image=${convertedIndex}`);
  };

  handlerTransition = (e: React.MouseEvent) => {
    const { history, match } = this.props;
    let counterImage = this.state.indexImage;
    if ((e.currentTarget as HTMLElement).dataset.direction === "next") {
      ++counterImage;
    } else if ((e.currentTarget as HTMLElement).dataset.direction === "prev") {
      --counterImage;
    }
    this.setState({ indexImage: counterImage }, () => {
      history.push(`/movie/${match.params.id}?image=${this.state.indexImage}`);
    });
  };

  openImage = () => {
    this.setState({
      isOpen: true,
    });
  };

  closeImage = () => {
    const { history, match } = this.props;
    this.setState(
      {
        isOpen: false,
      },
      () => {
        history.push(`/movie/${match.params.id}`);
      }
    );
  };

  loadImage = () => {
    this.setState({ loaded: true });
  };

  render() {
    const { imageURL, galleryDesktop, galleryMobile } = this.props;
    const { loaded, indexImage, isOpen } = this.state;
    const galleryDisabledNextBtn =
      galleryDesktop.length - 1 > indexImage ? false : true;
    const galleryDisabledPrevBtn = indexImage > 0 ? false : true;
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
          {isOpen ? (
            <GalleryWrapper>
              <ZoomGalleryBackground>
                <ButtonClose onClick={this.closeImage}>X</ButtonClose>
                <picture
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "center",
                  }}
                >
                  <ZoomImageGallery
                    onLoad={this.loadImage}
                    srcSet={galleryDesktop[indexImage]}
                    media="(min-width: 760px)"
                  />
                  <img
                    onLoad={this.loadImage}
                    src={galleryMobile[indexImage]}
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
