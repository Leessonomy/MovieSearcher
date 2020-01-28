import styled, { createGlobalStyle } from "styled-components";

export function fontFace(fontWeight = "normal", fontStyle = "normal") {
  return `
    @font-face{
      font-family: "Segoe";
      src: url(${require("../../fonts/SegoeUI.woff")});
      font-style: ${fontStyle};
      font-weight: ${fontWeight};
      };
    @font-face{
      font-family: "Montserrat";
      src: url(${require("../../fonts/Montserrat-Medium.ttf")});
      font-style: ${fontStyle};
      font-weight: ${fontWeight};
}`;
}

export const GlobalStyle = createGlobalStyle`
input::-webkit-search-decoration,
input::-webkit-search-cancel-button,
input::-webkit-search-results-button,
input::-webkit-search-results-decoration { display: none; }
${fontFace("normal", "normal")}
  body {
    margin: 0; padding: 0; 
    box-sizing: border-box;
    margin: 0 auto;
    overflow-x: hidden;

    @media (min-width: 320px) and (max-width: 767px){
      min-width: 360px;
  }
    @media (min-width: 768px ) {
    min-width: 768px;
}

}
`;

const MainWrapper = styled.div`
  display: flex;
  background-color: #f8f9fa;
`;

const Fallback = styled.div`
  position: fixed;
  font-size: 24px;
  display: flex;
  justify-content: center;
  font-weight: 700;
  font-family: Segoe, sans-serif;
  top: 50%;
  left: 50%;
  right: 50%;
  bottom: 50%;
`;

export { MainWrapper, Fallback };
