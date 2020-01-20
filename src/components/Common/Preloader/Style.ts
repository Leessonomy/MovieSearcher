import styled from "styled-components";

const PreloaderImage = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  left: 50%;
  right: 50%;
  bottom: 50%
`;

const PreloaderWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 999;
`;

export { PreloaderImage, PreloaderWrapper };
