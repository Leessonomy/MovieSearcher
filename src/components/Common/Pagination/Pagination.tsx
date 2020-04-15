import React from "react";
import {
  ButtonNext,
  ButtonPrev,
  ButtonNextWrapper,
  ButtonPrevWrapper,
  ButtonContainer,
} from "./Style";

const Pagination = ({
  handlePrevClick,
  handleNextClick,
  currentPage,
  totalPages,
}) => {
  const showNextButton = currentPage < totalPages;
  const showPrevButton = currentPage > 1;
  return (
    <ButtonContainer>
      {showPrevButton ? (
        <ButtonPrevWrapper>
          <ButtonPrev onClick={handlePrevClick}>Prev Page</ButtonPrev>
        </ButtonPrevWrapper>
      ) : null}
      {showNextButton ? (
        <ButtonNextWrapper>
          <ButtonNext onClick={handleNextClick}>Next Page</ButtonNext>
        </ButtonNextWrapper>
      ) : null}
    </ButtonContainer>
  );
};

export default Pagination;
