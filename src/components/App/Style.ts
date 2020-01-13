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
${fontFace("normal", "normal")}
  body {
    margin: 0; padding: 0; 
    box-sizing: border-box;
    margin: 0 auto;
    overflow-x: hidden;
    @media (min-width: 320px) {
      min-width: 320px;
      margin: 0 auto;
  }
    @media (min-width: 768px) {
    min-width: 768px;
    margin: 0 auto;
}
  }
`;

export const MainWrapper = styled.div`
  display: flex;
  background-color: #f8f9fa;
`;
