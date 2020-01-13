import styled from "styled-components";

const HeaderContainer = styled.header`
  top: 0;
  left: 0;
  width: 100%;
  height: 105px;
  background-color: #0e6179;
  display: flex;
  margin: 0 auto;
  z-index: 99;
`;
const FieldContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: calc(50% - 472px);
`;
const FieldWrapper = styled.div`
  display: block;
`;

const FindField = styled.input`
  background-color: #fff;
  height: 30px;
  width: 260px;
`;
const ImageWrapper = styled.div`
  min-width: 0;
  display: inline-block;
  width: auto;
  position: absolute;
`;
const SearchImage = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  top: -9px;
  left: 232px;
  cursor: pointer;
`;

export {
  HeaderContainer,
  FieldContainer,
  FieldWrapper,
  FindField,
  ImageWrapper,
  SearchImage
};
