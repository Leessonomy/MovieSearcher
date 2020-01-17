import React from "react";
import {
  HeaderContainer,
  FieldContainer,
  FieldWrapper,
  ImageWrapper,
  SearchImage
} from "./Style";
import SearchContainer from "../Containers/SearchContainer";
import FavoritePage from "../Links&Buttons/FavoriteLink/FavoritePage";
import HomePage from "../Links&Buttons/HomeLink/HomePage";
import magnifierImg from '../../img/search.svg'


const Header = () => (
  <HeaderContainer>
    <FieldContainer>
      <FieldWrapper>
        <SearchContainer />
        <HomePage />
        <FavoritePage />
      </FieldWrapper>
      <ImageWrapper>
        <SearchImage src={magnifierImg} />
      </ImageWrapper>
    </FieldContainer>
  </HeaderContainer>
);

export default Header;
