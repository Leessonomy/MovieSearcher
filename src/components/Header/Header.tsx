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
import FavoriteLink from "../Links&Buttons/FavoriteLink/FavoriteLink";
import HomeLink from "../Links&Buttons/HomeLink/HomeLink";
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
      <HomeLink />
      <FavoriteLink />
    </LinksWrapper>
  </HeaderContainer>
);

export default Header;
