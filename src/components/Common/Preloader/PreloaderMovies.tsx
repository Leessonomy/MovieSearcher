import React from "react";
import { PreloaderImage, PreloaderWrapper } from "./Style";
import preloaderMobile from "../../../img/preloaderS.svg";
import preloaderDesktop from "../../../img/loaderTotal.svg";

const PreloaderMovies = () => (
  <PreloaderWrapper>
    <PreloaderImage>
      <picture>
        <source srcSet={preloaderDesktop} media="(min-width: 760px)" />
        <img src={preloaderMobile} />
      </picture>
    </PreloaderImage>
  </PreloaderWrapper>
);

export default PreloaderMovies;
