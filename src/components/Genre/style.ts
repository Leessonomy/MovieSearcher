import styled from "styled-components";

const Genre = styled.input`
  display: none;
`;
const GenreWrapper = styled.div`
  margin-top: 29px;
  width: 12%;
  text-transform: uppercase;
`;
const GenreList = styled.div`
  display: block;
  position: relative;
  &:hover {
    box-shadow: #gray;
    cursor: pointer;
  }
`;
const GenresFormsList = styled.label`
  padding: 5px 0;
  padding-left: 40px;
  z-index: -1;
  width: 100%;
  height: 16px;
  display: inline-block;
  line-height: 19px;
  font-size: 14px;
  vertical-align: middle;
  cursor: pointer;

  &:before {
    content: "";
    position: absolute;
    left: 13px;
    width: 16px;
    height: 16px;
    border: 2px solid #09084c87;
    cursor: pointer;
  }
  input:checked + &:after {
    content: "";
    position: absolute;
    top: 11px;
    left: 19px;
    width: 8px;
    height: 8px;
    background-color: #577788;
  }
`;

export { Genre, GenreWrapper, GenreList, GenresFormsList };
