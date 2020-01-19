import React from "react";
import {
  HeaderContainer,
  FieldContainer,
  FieldWrapper,
  ImageWrapper,
  SearchImage,
  LinksWrapper
} from "./Style";
import SearchContainer from "../Containers/SearchContainer";
import FavoritePage from "../Links&Buttons/FavoriteLink/FavoritePage";
import HomePage from "../Links&Buttons/HomeLink/HomePage";
import magnifierImg from "../../img/search.svg";

const Header = () => (
  <HeaderContainer>
    <FieldContainer>
      <FieldWrapper>
        <SearchContainer />
      </FieldWrapper>
      <ImageWrapper>
        <SearchImage src={magnifierImg} />
      </ImageWrapper>
    </FieldContainer>
    <LinksWrapper>
      <HomePage />
      <FavoritePage />
    </LinksWrapper>
  </HeaderContainer>
);

export default Header;
