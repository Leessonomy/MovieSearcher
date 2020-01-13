import React from "react";
import { PreloaderImage } from "./Style";
import preloaderMobile from "../../../img/preloaderS.svg";
import preloaderDesktop from "../../../img/preloaderL.svg";

const PreloaderGallery = () => (
  <PreloaderImage>
    <picture>
      <source srcSet={preloaderDesktop} media="(min-width: 760px)" />
      <img src={preloaderMobile} />
    </picture>
  </PreloaderImage>
);

export default PreloaderGallery;
