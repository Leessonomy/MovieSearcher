import React from "react";
import {
  HeaderContainer,
  FieldContainer,
  FieldWrapper,
  ImageWrapper,
  SearchImage
} from "./Style";
import SearchContainer from "../Containers/SearchContainer";
import Home from "../Home/Home";
import Favorite from "../Favorite/Favorite";
import magnifierImg from '../../img/search.svg'


const Header = () => (
  <HeaderContainer>
    <FieldContainer>
      <FieldWrapper>
        <SearchContainer />
        <Home />
        <Favorite/>
      </FieldWrapper>
      <ImageWrapper>
        <SearchImage src={magnifierImg} />
      </ImageWrapper>
    </FieldContainer>
  </HeaderContainer>
);

export default Header;
