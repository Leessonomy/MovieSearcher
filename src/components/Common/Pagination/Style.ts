import styled from "styled-components";

const ButtonPrevWrapper = styled.div`
display: block
}
`;

const ButtonNextWrapper = styled.div`
display: block
}
`;

const ButtonContainer = styled.div`
display: flex
width: 100%;
justify-content: space-evenly;
margin-top: 45px;
margin-bottom: 17px;
`;

const ButtonNext = styled.button`
position: relative
height: 45px;
background-color: #34495e;
box-shadow: 0 4px 4px 0 rgba(0,0,0,0.3);
color: #fff;
border: none;
font-family: 'Lato';
cursor: pointer;
display: inline-block;
text-transform: uppercase;
letter-spacing: 1px;
font-weight: 700;
outline: none;
color: #fff;
transition: all 0.3s;
font-size: inherit;
width: 155px;
border-radius: 4px;
margin-left: auto;
margin-right: auto;
  @media (min-width: 1440px) {
    right: 2%;
  }
  :hover {
    background-color: #375b80;
}
`;

const ButtonPrev = styled.button`
  position: relative;
  height: 45px;
  background-color: #34495e;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.3);
  color: #fff;
  border: none;
  font-family: "Lato";
  cursor: pointer;
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;
  outline: none;
  color: #fff;
  transition: all 0.3s;
  font-size: inherit;
  width: 155px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 4px;
  @media (min-width: 1440px) {
    right: 2%;
  }
  :hover {
    background-color: #375b80;
  }
`;

export {
  ButtonNext,
  ButtonPrev,
  ButtonNextWrapper,
  ButtonPrevWrapper,
  ButtonContainer
};
