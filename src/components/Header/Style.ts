import styled from "styled-components";

const HeaderContainer = styled.header`
  top: 0;
  left: 0;
  width: 100%;
  height: 105px;
  background-color: #252c62;
  display: flex;
  margin: 0 auto;
  z-index: 99;
`;
const FieldContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: calc(50% - 587px);
  text-decoration: none;
  font-family: Segoe;
`;
const FieldWrapper = styled.div`
  display: block;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

const LinksWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: calc(50% - 140px);
  text-transform: uppercase;
  justify-content: center;
  width: 100%;
  @media (max-width: 1144px) {
    padding-left: calc(50% - 195px);
  }
`;

const FindField = styled.input`
  background-color: #fff;
  height: 30px;
  width: 361px;
  padding-left: 6px;
  @media (max-width: 767px) {
    width: 214px;
  }
`;
const ImageWrapper = styled.div`
  min-width: 0;
  display: inline-block;
  width: auto;
  position: absolute;
`;
const SearchImage = styled.img`
  width: 24px;
  height: 23px;
  position: absolute;
  top: -12px;
  cursor: pointer;
  left: 331px;
  @media (max-width: 767px) {
    left: 187px;
  }
`;

export {
  HeaderContainer,
  FieldContainer,
  FieldWrapper,
  FindField,
  ImageWrapper,
  LinksWrapper,
  SearchImage
};
