import styled from "styled-components";

const BackButton = styled.button`
width: 110px;
height: 37px;
text-decoration: none;
padding-top: 9px;
color: rgb(53, 34, 34);
background: rgb(238, 229, 255);
margin: 20px auto;
font-family: Montserrat,sans-serif;
font-size: 21px;
padding: 6px;
text-decoration: none;
outline: none;
text-shadow: 0 1px 1px rgba(0,0,0,0.075);
border-radius: 5px;
cursor: pointer;
border: none;
position: absolute;
left: 60px;
 &:hover {
     background-color: rgb(216, 205, 236);
 }
 @media (max-width: 767px) {
    top: 174px;
    padding: 2px;
    background: rgb(204, 177, 255);
    width: 344px;
    height: 29px;
    left: calc(50% - 173px);
 }
`


export { BackButton };