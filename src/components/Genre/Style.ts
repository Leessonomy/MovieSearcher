import styled from "styled-components";

const GenreWrapper = styled.div`
  margin-top: 29px;
  width: 12%;
  text-transform: uppercase;
  letter-spacing: -0.3px;
  font-family: Segoe;
  font-weight: 500;
  @media (max-width: 767px) {
    position: absolute;
    flex-direction: row;
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 25px auto;
    flex-wrap: wrap;
  }
`;

const Genre = styled.input`
  display: none;
  &:checked + label > span:after {
    content: "";
    position: absolute;
    top: 52%;
    height: 2px;
    background-color: #000;
    left: 0;
    width: 100%;
    transform: translateY(-50%);
    transition: width 100ms ease-in-out;
  }
`;
const GenreList = styled.div`
  display: block;
  position: relative;
  &:hover {
    box-shadow: #gray;
    cursor: pointer;
  }
  @media (max-width: 767px) {
    min-width: 32%;
  }
`;
const GenresFormsList = styled.label`
  padding: 5px 0;
  padding-left: 40px;
  z-index: -1;
  height: 16px;
  display: inline-block;
  line-height: 16px;
  font-size: 14px;
  vertical-align: middle;
  cursor: pointer;
  display: flex;
  @media (max-width: 767px) {
    font-size: 10px;
  }
  &:before {
    content: "";
    position: absolute;
    left: 13px;
    width: 16px;
    height: 16px;
    border: 2px solid #12344a;
    cursor: pointer;
  }

  input:checked + &:after {
    content: "";
    position: absolute;
    top: 11px;
    left: 19px;
    width: 8px;
    height: 8px;
    background-color: #12344a;
}
  }`;

const GenreName = styled.span`
  position: absolute;
  > input:checked + &:after {
    content: "";
    top: 52%;
    height: 2px;
    background-color: #000;
    left: 27%;
    width: 85%;
    transform: translateY(-50%);
    transition: width 100ms ease-in-out;
  }
`;

export { Genre, GenreWrapper, GenreList, GenresFormsList, GenreName };
