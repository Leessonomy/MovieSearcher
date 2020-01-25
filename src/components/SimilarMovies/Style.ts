import styled from "styled-components";

const SimilarMovieCard = styled.div`
  display: flex;
  width: 185px
  flex-direction: column;
  background-color: #fff;
  box-shadow:0 6px 20px 0 rgba(0,0,0,0.1)
  border-radius: 5px;
  box-sizing: border-box;
  cursor: pointer;
  transition: 0.2s;
  margin-top: 15px;
  margin-right: -150px;
  margin-left: 40px;
  height: 278px;
  @media (min-width: 760px) and (max-width: 1359px) {
    margin-left: 17px;
    margin-right: 9px;
    height: 231px;
    width: 154px;
  }

  @media (min-width: 320px) and (max-width: 759px) {
    margin-left: 17px;
    margin-right: 9px;
    height: 138px;
    width: 92px;
  }
`;

const CardDescription = styled.div`
  display: block;
  position: relative;
`;

const Name = styled.h2`
	display: block;
	word-wrap: break-word;
  transition: opacity 0.1s ease-in-out;
  font-size: 13px;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.68);
  height: 12%
  width: 100%
  text-align: center;
  border-radius: 6px;
  padding-top: 12px;
  color: #fff;
	top: 0;
	left: 0;
  margin: 0;
  opacity: 0;

  ${CardDescription}:hover & {
		opacity: 1;
  }

  @media (max-width: 768) {
        font-size: 8px;
  }
`;

const Overview = styled.div`
  display: block;
  min-height: 17%;
  background-color: rgba(0, 0, 0, 0.68);
  transition: opacity 0.1s ease-in-out;
  text-align: center;
  color: #fff;
  font-size: 12px;
  border-radius: 6px;
  opacity: 0;
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 0;

  ${CardDescription}:hover & {
    opacity: 1;
  }
  @media (max-width: 1359px) {
    font-size: 8px;
  }
  @media (max-width: 768) {
    font-size: 8px;
  }
`;

export { SimilarMovieCard, CardDescription, Name, Overview };
