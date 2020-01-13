import styled from "styled-components";

const ZoomImageGallery = styled.source`
  position: relative;
  left: 0;
  bottom: 0;
  right: 0;
  margin: 0 auto;
  z-index: -1;
`;
const ZoomGalleryBackground = styled.div`
  position: relative;
  z-index: 999;
  display: flex;
`;

const ImageWrapper = styled.div`
  display: block;
`;

const GalleryWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 100;
`;
const ButtonPrev = styled.button`
  position: relative;
  top: 218.5px;
  height: 50px;
  left: calc(50% - 1236px);
  cursor: pointer;
  width: 26px;
  height: 50px;
  border: none;
  background-color: rgba(0, 0, 0, 0.65);
  opacity: 1;
  transition: 0.15s;

  &:before {
    content: "";
    top: calc(50% - 6px);
    transform: rotate(-45deg);
    position: absolute;
    left: calc(50% - 10px);
    display: block;
    width: 20px;
    height: 2px;
    background-color: #fff;
  }

  &:after {
    content: "";
    top: calc(50% - -7px);
    transform: rotate(45deg);
    position: absolute;
    left: calc(50% - 10px);
    display: block;
    width: 20px;
    height: 2px;
    background-color: #fff;
  }

  @media (max-width: 760px) {
    top: 90px;
    left: calc(5% - 388px);
  }
`;
const ButtonNext = styled.button`
  position: relative;
  top: 218.5px;
  right: calc(8% - 36px);
  cursor: pointer;
  width: 26px;
  height: 50px;
  border: none;
  background-color: rgba(0, 0, 0, 0.65);
  opacity: 1;
  transition: 0.15s;

  &:before {
    top: calc(50% - 6px);
    transform: rotate(45deg);
    position: absolute;
    left: calc(50% - 10px);
    display: block;
    content: "";
    width: 20px;
    height: 2px;
    background-color: #fff;
  }

  &:after {
    content: "";
    position: absolute;
    top: calc(50% + 7px);
    transform: rotate(-45deg);
    left: calc(50% - 10px);
    display: block;
    content: "";
    width: 20px;
    height: 2px;
    background-color: #fff;
  }
  @media (max-width: 760px) {
    top: 90px;
    right: calc(8% - 6px);
  }
`;

const ButtonClose = styled.button`
  position: relative;
  top: 0px;
  cursor: pointer;
  width: 40px;
  height: 40px;
  left: calc(50% + 344px);
  border: none;
  background-color: rgba(0, 0, 0, 0.65);
  opacity: 1;
  -webkit-transition: 0.15s;
  transition: 0.15s;
  z-index: 9999;
  &:before {
    top: calc(51% - 2px);
    transform: rotate(47deg);
    position: absolute;
    left: calc(50% - 11px);
    display: block;
    content: "";
    width: 24px;
    height: 2px;
    background-color: #fff;
  }

  &:after {
    content: "";
    position: absolute;
    top: calc(50% + -2px);
    transform: rotate(-45deg);
    left: calc(50% - 11px);
    display: block;
    content: "";
    width: 24px;
    height: 2px;
    background-color: #fff;
  }

  @media (max-width: 760px) {
    left: calc(50% + 125px);
  }
`;

const PreviewImages = styled.img`
  display: block;
  margin-left: 3px;
  margin-right: 3px;
  margin-top: 5px;
`;

const PreloaderWrapper = styled.div`
  width: 780px;
  height: 439px;
  background-color: rgba(220, 226, 226, 0.92);
  position: absolute;
  left: 0px;
  bottom: 0px;
  right: 0px;
  margin: 0 auto;
`;

export {
  PreviewImages,
  ZoomImageGallery,
  ZoomGalleryBackground,
  GalleryWrapper,
  ButtonPrev,
  ButtonNext,
  ButtonClose,
  ImageWrapper,
  PreloaderWrapper
};
