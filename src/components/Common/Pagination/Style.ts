import styled from "styled-components";

const ButtonPrevWrapper = styled.div`
height: 3000px;
    width: 156px;
    top: 0;
    left: 159px;
    display: block;
    position: absolute;
}
`;

const ButtonNextWrapper = styled.div`
height: 3000px;
    width: 166px;
    top: 0;
    right: 0;
    display: block;
    position: absolute;
}
`;

const ButtonNext = styled.button`
  position: fixed;
  top: 50%;
  cursor: pointer;
  width: 66px;
  height: 140px;
  right: 4%;
  border: none;
  background-color: rgba(0, 0, 0, 0.65);
  opacity: 0;
  transition: 0.5s;

  &:before {
    top: calc(45% - 6px);
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    position: absolute;
    left: calc(46% - 10px);
    display: block;
    content: "";
    width: 28px;
    height: 2px;
    background-color: #fff;
  }

  &:after {
    content: "";
    position: absolute;
    top: calc(50% + 7px);
    -webkit-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
    left: calc(44% - 10px);
    display: block;
    content: "";
    width: 28px;
    height: 2px;
    background-color: #fff;
  }
  ${ButtonNextWrapper}:hover & {
    opacity: 1;
  }
  @media (min-width: 1440px) {
    right: 2%;
  }
`;

const ButtonPrev = styled.button`
  position: fixed;
  top: 50%;
  cursor: pointer;
  left: 14%;
  width: 66px;
  height: 140px;
  border: none;
  background-color: rgba(0, 0, 0, 0.65);
  opacity: 0;
  transition: 0.5s;

  &:before {
    content: "";
    top: calc(46% - 6px);
    -webkit-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
    position: absolute;
    left: calc(44% - 10px);
    display: block;
    width: 28px;
    height: 2px;
    background-color: #fff;
  }

  &:after {
    content: "";
    top: calc(50% - -7px);
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    position: absolute;
    left: calc(44% - 10px);
    display: block;
    width: 28px;
    height: 2px;
    background-color: #fff;
  }
  ${ButtonPrevWrapper}:hover & {
    opacity: 1;
  }
  @media (min-width: 1440px) {
    left: 12%;
  }
`;

/* 
}*/

export { ButtonNext, ButtonPrev, ButtonNextWrapper, ButtonPrevWrapper };
